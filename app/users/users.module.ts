
import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService }  from './users.service';
import { UsersComponent } from './users.component';
import { UsersNewComponent } from './users-new.component';
import { UsersEditComponent } from './users-edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,        
    ],
    declarations: [
        UsersComponent,
        UsersNewComponent,
        UsersEditComponent
    ],
    exports: [
        UsersComponent,
        UsersNewComponent,
        UsersEditComponent
    ],
    providers: [
        UsersService
    ]
})
export class UsersModule {
    
}