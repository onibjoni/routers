
import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';


import { JsonService }  from './json.service';
import { JsonComponent } from './json.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        JsonComponent
    ],
    exports: [
        JsonComponent
    ],
    providers: [
        JsonService
    ]
})
export class JsonModule {
    
}