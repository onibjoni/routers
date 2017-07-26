"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var JsonService = (function () {
    function JsonService(_http) {
        this._http = _http;
        this._url = "http://jsonplaceholder.typicode.com";
    }
    JsonService.prototype.postJsonData = function (url, jsonData) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._url + "/posts", { username: "name", email: "email" }, options).map(function (res) { return res.json(); });
    };
    JsonService.prototype.getJsonData = function (url) {
        return this._http.get(url == "" ? this._url + "/users" : url)
            .map(function (res) { return res.json(); });
    };
    JsonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], JsonService);
    return JsonService;
}());
exports.JsonService = JsonService;
//# sourceMappingURL=json.service.js.map