
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class PostsService {

    private _url = "http://jsonplaceholder.typicode.com";

    constructor(private _http: Http){
    }
    
    getPosts() {
        return this._http.get(this._url + "/posts")
            .map(res => res.json());
    }

    getPostsForUser(userId) {
        return this._http.get(this._url + "/posts?userId=" + userId)
            .map(res => res.json());
    }    

    getComments(id){
        return this._http.get(this._url + "/posts/" + id + "/comments")
            .map(res => res.json());
    }

    getPostsHead() {
        var headers = new Headers({
            "access-control-request-method" : "GET",
            "authorization" : "basic token"
        });

        var options = new RequestOptions({
            headers: headers
        });

        return this._http.get(this._url, options)
            .map(res => res.json());
    }          
}