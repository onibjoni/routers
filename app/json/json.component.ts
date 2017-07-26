
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormComponent } from '../prevent-unsaved-changes-guard.service';

import { JsonService } from './json.service'; 

import { JsonData } from './jsonData';

@Component({
    selector: 'posts',
    templateUrl: 'app/json/json-component.html' 

})
export class JsonComponent implements  OnInit{
    userSubscription;
    users;

    requestedNewJson;
    title;  
    url;
    
    constructor(private _jsonService : JsonService) {
        this.title = "Json Data";
        this.requestedNewJson = false;
        this.url = "";
    }

    ngOnInit(){
        
        //Get Json Data
        this.userSubscription = this._jsonService.getJsonData("")
            .subscribe(data => {
                this.users = data;
            }, 
            error => { /* do nothing on error for now */},
            () => { /* do nothing on completion for now */ });      
    
    }


    hasUnsavedChanges(){
        return false;
    }

    ngOnDestroy(){
        this.userSubscription.unsubscribe();
    }

    getNewJson(){

        //call edit user if needed
        console.log("Url is: " + this.url)
        this.userSubscription = this._jsonService.getJsonData(this.url)
            .subscribe(data => {
                this.users = data;
                this.title = "Got New Json Data";
                this.requestedNewJson = true;
            }, 
            error => { 
                console.log("Failed to retrieve url...");
                this.requestedNewJson = false;
                this.title = "Tried to get New Json Data";
                this.url = "";                
            },
            () => { /* do nothing on completion for now */ }); 
            
    }
    
}