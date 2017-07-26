import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_PROVIDERS } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavBarComponent }  from './navbar.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { SpinnerComponent } from './shared/spinner.component';

import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';  

import { customRouting } from './navbar.routing';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

@NgModule({
  //What modules this module is dependent upon
  imports: [ 
    BrowserModule,
    PostsModule,
    UsersModule,
    customRouting  //app parent should be last
  ],
  //what components directives and pipes are part of this
  declarations: [ 
    NavBarComponent,
    HomeComponent,
    NotFoundComponent
  ],  
  //What this module exports
    exports: [
    ],
  //What providers this module needs
  providers: [
    AuthService,
    AuthGuard,
    PreventUnsavedChangesGuard,
    HTTP_PROVIDERS
  ],
  bootstrap: [ NavBarComponent ]
})
export class NavBarModule { }