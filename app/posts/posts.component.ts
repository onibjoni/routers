
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormComponent } from '../prevent-unsaved-changes-guard.service';

import { PostsService } from './posts.service'; 
import { UsersService } from '../users/users.service';

import { SpinnerComponent } from '../shared/spinner.component';
import { PaginationComponent } from '../shared/pagination.component';

import { Post } from './posts';
import { User } from '../users/user';

@Component({
    selector: 'posts',
    templateUrl: 'app/posts/posts-component.html' ,
    directives: [SpinnerComponent, PaginationComponent],
    styles: [`
        .round {
            border-radius: 100%;
        }
        .posts	li	{	cursor:	default;	}
        .posts	li:hover	{	background:	#ecf0f1;	}	
        .list-group-item.active,	
        .list-group-item.active:hover,	
        .list-group-item.active:focus	{	
	        background-color:	#ecf0f1;
	        border-color:	#ecf0f1;	
	        color:	#2c3e50;
            }
        `]
})
export class PostsComponent implements FormComponent, OnInit{
    posts: Array<Post> = [];
    pagedPosts = [];
    users: Array<User> = [];
    selectedValue: string;

    postSubscription;
    userSubscription;

    title = "New Posts";
    form: FormGroup;
    postLoading;
    isCommentLoading = false;
    postSelected = false;
    comments = [];

    currentPost;
    pageSize = 10;


    constructor(private _postService : PostsService, private _userService: UsersService) {
        this.postLoading = true;
        //default drop down to select user
        this.selectedValue = "selectUser";
    }

    ngOnInit(){
        //Get Posts
        this.loadPosts();
        
        //Get Users
        this.userSubscription = this._userService.getUsers()
            .subscribe(data => {
                this.users = data;
            }, 
            error => { /* do nothing on error for now */},
            () => { /* do nothing on completion for now */ });      
    
    }

    private loadPosts(){
        this.postSubscription = this._postService.getPosts()
            .subscribe(data => {
                this.posts = data;
                this.pagedPosts = _.take(this.posts, this.pageSize);                
            }, 
            error => {},
            () => {
                this.postLoading = false
            });
    }


    postUserChanged(u){

        this.postLoading = true;

        if(u != "selectUser"){
            //selected a specific user
            this._postService.getPostsForUser(u)
                .subscribe(data => {
                    this.posts = data;
                    this.pagedPosts = _.take(this.posts, this.pageSize);                
                    
                }, 
                error => {},
                () => {
                    this.postLoading = false
              });              
        } else {
            //get all post
            this.loadPosts();
        }                        
    }

    selectedPost(p) {
        this.postSelected = true;
        this.currentPost = p;

        this.isCommentLoading = true;
        this._postService.getComments(p.id)
            .subscribe(data => {
                this.comments = data;
            },
            error => { },
            () => { this.isCommentLoading = false});
    }

    hasUnsavedChanges(){
        return false;
    }

    ngOnDestroy(){
        this.postSubscription.unsubscribe();
        this.userSubscription.unsubscribe();
    }

	onPageChanged(page) {
        var startIndex = (page - 1) * this.pageSize;
        this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
	}
    
}