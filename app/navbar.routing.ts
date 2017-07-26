import {Router, RouterModule} from '@angular/router';

import{JsonComponent} from './json/json.component';
import{PostsComponent} from './posts/posts.component';
import{UsersComponent} from './users/users.component';
import{UsersNewComponent} from './users/users-new.component';
import{UsersEditComponent} from './users/users-edit.component';
import{HomeComponent} from './home.component';
import{NotFoundComponent} from './not-found.component';

import { AuthGuard } from './auth-guard.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

export const customRouting = RouterModule.forRoot([
    {
        path: '', 
        component: HomeComponent 
    },
    {
        path: 'users', 
        component: UsersComponent, 
        canDeactivate: [PreventUnsavedChangesGuard] 
    },
    {
        path: 'users/new', 
        component: UsersNewComponent, 
        canDeactivate: [PreventUnsavedChangesGuard]  
    },    
    {
        path: 'users/:id', 
        component: UsersEditComponent, 
        canDeactivate: [PreventUnsavedChangesGuard] 
    },
    {
        path: 'users/delete/:deleteId', 
        component: UsersEditComponent, 
        canDeactivate: [PreventUnsavedChangesGuard] 
    },         
    {
        path: 'posts', 
        component: PostsComponent, 
        canDeactivate: [PreventUnsavedChangesGuard]
    },
    {
        path: 'json', 
        component: JsonComponent, 
        canDeactivate: [PreventUnsavedChangesGuard]
    },    
    {path: '**', component: NotFoundComponent}
]);