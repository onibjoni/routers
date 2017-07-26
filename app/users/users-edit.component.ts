
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormComponent } from '../prevent-unsaved-changes-guard.service';
import { UsersService } from './users.service'; 
import { User } from './user';
import { validateEmail } from '../validators/customValidators';

@Component({
    selector: 'users-edit',
    templateUrl: 'app/users/users-form.component.html',
    providers: [FormBuilder]
})
export class UsersEditComponent implements FormComponent, OnInit, OnDestroy{
    user: User;
    title = "Edit User";
    form: FormGroup;
    subscription;
    id;
    isDelete: Boolean;

    constructor(
        @Inject(FormBuilder) _formBuilder: FormBuilder, 
        private _userService:UsersService,
        private _router:Router,
        private _route:ActivatedRoute){
        
        //init blank user for 2 way binding
        this.user = new User();
        this.user.address = {};

        this.form = _formBuilder.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, validateEmail]],
            street: [''],
            suite: [],
            city: [],
            zipcode: [],
            phone: []
        });
       
    }

    ngOnInit(){
        this.subscription = this._route.params.subscribe(params => {
            
            this.id = params["deleteId"];
            
            if(this.id){
                //This is a delete
                this.title = "Delete User";
                this.isDelete = true;  
            } else{
                this.title = "Edit User"                    
                this.id = +params["id"];
            }

            this._userService.getUserAtIndex(this.id).subscribe(data=>{
                console.log("This is the data I got at index: " + 1);
                console.log(data);
                this.user = data;
            });

        });
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    hasUnsavedChanges(){
        if(this.form.dirty){
            return true;
        }

        return false;
    }

    addUser(formGroup: FormGroup){

        //mark form pristine so you can leave
        this.form.markAsPristine();

        //call edit user if needed
        this._userService.editUser(this.user, this.id).subscribe(x=> 
            {  
                //after subscribing and validating data, route to user
                console.log("Added a new User, now navigating outta here!!")
                this._router.navigate(['users']); 
            },
            err => {
                console.log("User Service errored out, do something");
            },
            () => {
                //do something here if needed when completed
            });

    }
}