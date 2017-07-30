
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {JsonData} from './jsonData';

@Injectable()
export class JsonService {

    private _url = "http://jsonplaceholder.typicode.com";
    private _passThrough = "http://localhost:8080/cmjira/passThrough.action";

    constructor(private _http: Http){
    }

    postJsonDataPassThrough(){
        return this._http.get(this._passThrough)
            .map(res => res.json());
    }    
    
    postJsonData(urlIn?, jsonData?: JsonData){

        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this._http.post(urlIn, 
            { username: "name", email: "email" }, 
            options).map(res => res.json());
    }

    getJsonData(url) {
        return this._http.get(  url == ""? this._url + "/users": url )
            .map(res => res.json());
    }

}