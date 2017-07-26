"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var posts_service_1 = require('./posts.service');
var users_service_1 = require('../users/users.service');
var spinner_component_1 = require('../shared/spinner.component');
var pagination_component_1 = require('../shared/pagination.component');
var PostsComponent = (function () {
    function PostsComponent(_postService, _userService) {
        this._postService = _postService;
        this._userService = _userService;
        this.posts = [];
        this.pagedPosts = [];
        this.users = [];
        this.title = "New Posts";
        this.isCommentLoading = false;
        this.postSelected = false;
        this.comments = [];
        this.pageSize = 10;
        this.postLoading = true;
        //default drop down to select user
        this.selectedValue = "selectUser";
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get Posts
        this.loadPosts();
        //Get Users
        this.userSubscription = this._userService.getUsers()
            .subscribe(function (data) {
            _this.users = data;
        }, function (error) { }, function () { });
    };
    PostsComponent.prototype.loadPosts = function () {
        var _this = this;
        this.postSubscription = this._postService.getPosts()
            .subscribe(function (data) {
            _this.posts = data;
            _this.pagedPosts = _.take(_this.posts, _this.pageSize);
        }, function (error) { }, function () {
            _this.postLoading = false;
        });
    };
    PostsComponent.prototype.postUserChanged = function (u) {
        var _this = this;
        this.postLoading = true;
        if (u != "selectUser") {
            //selected a specific user
            this._postService.getPostsForUser(u)
                .subscribe(function (data) {
                _this.posts = data;
                _this.pagedPosts = _.take(_this.posts, _this.pageSize);
            }, function (error) { }, function () {
                _this.postLoading = false;
            });
        }
        else {
            //get all post
            this.loadPosts();
        }
    };
    PostsComponent.prototype.selectedPost = function (p) {
        var _this = this;
        this.postSelected = true;
        this.currentPost = p;
        this.isCommentLoading = true;
        this._postService.getComments(p.id)
            .subscribe(function (data) {
            _this.comments = data;
        }, function (error) { }, function () { _this.isCommentLoading = false; });
    };
    PostsComponent.prototype.hasUnsavedChanges = function () {
        return false;
    };
    PostsComponent.prototype.ngOnDestroy = function () {
        this.postSubscription.unsubscribe();
        this.userSubscription.unsubscribe();
    };
    PostsComponent.prototype.onPageChanged = function (page) {
        var startIndex = (page - 1) * this.pageSize;
        this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'posts',
            templateUrl: 'app/posts/posts-component.html',
            directives: [spinner_component_1.SpinnerComponent, pagination_component_1.PaginationComponent],
            styles: ["\n        .round {\n            border-radius: 100%;\n        }\n        .posts\tli\t{\tcursor:\tdefault;\t}\n        .posts\tli:hover\t{\tbackground:\t#ecf0f1;\t}\t\n        .list-group-item.active,\t\n        .list-group-item.active:hover,\t\n        .list-group-item.active:focus\t{\t\n\t        background-color:\t#ecf0f1;\n\t        border-color:\t#ecf0f1;\t\n\t        color:\t#2c3e50;\n            }\n        "]
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostsService, users_service_1.UsersService])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map