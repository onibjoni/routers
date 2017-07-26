
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FormComponent } from '../prevent-unsaved-changes-guard.service';
import { UsersService } from './users.service'; 

@Component({
    selector: 'users',
    template: `<h1>Users</h1>
        <a class="btn btn-primary extrapad" href="users/new">Add User</a>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>Quick Delete</th>
                </tr>
            </thead>
            <tr *ngFor="let u of users">
                <td> {{ u.name }} </td>
                <td> {{ u.email }} </td>
                <td><a href="users/{{u.id}}"><span class="glyphicon glyphicon-edit"></span></a></td>
                <td><a href="users/delete/{{u.id}}"><span class="glyphicon glyphicon-remove"></span></a></td>
                <td><a (click)="quickDelete(u.id)"><span class="glyphicon glyphicon-remove"></span></a></td>
            </tr>
         </table>   
    `,
    styles:[`
        .extrapad {
            margin: 15px;
        }    
    `]
})
export class UsersComponent implements FormComponent, OnInit{
    users;
    subscription;
    title = "New User";
    form: FormGroup;

    constructor(private _service : UsersService) {
    }
    
    ngOnInit(){
        this.subscription = this._service.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    hasUnsavedChanges(){
        return false;
    }

    quickDelete(deleteId){
        if(confirm("Are you sure you Want to Delete: " + deleteId)){
            //delete
            this._service.delteUser(deleteId);
            
        } else{
            //do nothing
        }
    }
}