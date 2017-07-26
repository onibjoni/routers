
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {JsonData} from './jsonData';

@Injectable()
export class JsonService {

    private _url = "http://jsonplaceholder.typicode.com";

    constructor(private _http: Http){
    }
    
    postJsonData(url?, jsonData?: JsonData){

        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this._http.post(this._url + "/posts", 
            { username: "name", email: "email" }, 
            options).map(res => res.json());
    }

    getJsonData(url) {
        return this._http.get(  url == ""? this._url + "/users": url )
            .map(res => res.json());
    }


       
}