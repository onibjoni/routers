
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `<h1>Photo Details {{ id }}</h1>
    `
})
export class PhotoDetailsComponent implements OnInit, OnDestroy{
    id;
    subscription;

    constructor(private _route: ActivatedRoute){

    }

    ngOnInit(){
        this.subscription = this._route.params.subscribe(params => {
            this.id = +params["id"];
        });

        // this.id = this._route.snapshot.params["id"];  //only runs once, doesnt work
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}