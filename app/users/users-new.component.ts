
import { Component, OnInit, OnDestroy, OnChanges, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormComponent } from '../prevent-unsaved-changes-guard.service';
import { UsersService } from './users.service'; 
import { User } from './user';
import { validateEmail } from '../validators/customValidators';

@Component({
    selector: 'users-new',
    templateUrl: 'app/users/users-form.component.html',
    providers: [FormBuilder]
})
export class UsersNewComponent implements FormComponent, OnInit{
    title = "New User";
    form: FormGroup;
    user: User;

    constructor(
        @Inject(FormBuilder) _formBuilder: FormBuilder, 
        private _userService:UsersService,
        private _router:Router){
        
        //init blank user for 2 way binding
        this.user = new User();
        this.user.address = {};

        this.form = _formBuilder.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, validateEmail]],
            street: [],
            suite: [],
            city: [],
            zipcode: [],
            phone: []
        });
       
    }

    ngOnChanges(){
        console.log("Found a Change...");
        console.log(this.form);
    }

    ngOnInit(){
    }

    ngOnDestroy(){

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

        this._userService.addUser(this.user).subscribe(x=> 
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