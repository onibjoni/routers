
import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';


import { PostsService }  from './posts.service';
import { PostsComponent } from './posts.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        PostsComponent
    ],
    exports: [
        PostsComponent
    ],
    providers: [
        PostsService
    ]
})
export class PostsModule {
    
}