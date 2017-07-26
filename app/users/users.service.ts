
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { User } from './user';

@Injectable()
export class UsersService {

    private _url = "http://jsonplaceholder.typicode.com";

    constructor(private _http: Http){
    }
    
    getUsers() {
        return this._http.get(this._url + "/users")
            .map(res => res.json());
    }

    getUserAtIndex(index){
        return this._http.get(this._url + "/users/" + index)
            .map(res => res.json());        
    }

    addUser(user: User){
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this._http.post(this._url + "/posts", 
            { username: user.name, email: user.email}, 
            options).map(res => res.json());
    }

    editUser(user: User, id){
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this._http.put(this._url + "/posts/" + id, 
            { username: user.name, email: user.email}, 
            options).map(res => res.json());
    }

    delteUser(id){
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers});
        
        return this._http.delete(this._url + "/posts/" + id)
            .map(res => res.json());   
    }        
}