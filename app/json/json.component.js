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
var json_service_1 = require('./json.service');
var JsonComponent = (function () {
    function JsonComponent(_jsonService) {
        this._jsonService = _jsonService;
        this.title = "Json Data";
        this.requestedNewJson = false;
        this.url = "";
    }
    JsonComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get Json Data
        this.userSubscription = this._jsonService.getJsonData("")
            .subscribe(function (data) {
            _this.users = data;
        }, function (error) { }, function () { });
    };
    JsonComponent.prototype.hasUnsavedChanges = function () {
        return false;
    };
    JsonComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    JsonComponent.prototype.getNewJson = function () {
        var _this = this;
        //call edit user if needed
        console.log("Getting Url is: " + this.url);
        this.userSubscription = this._jsonService.getJsonData(this.url)
            .subscribe(function (data) {
            _this.users = data;
            _this.title = "Got New Json Data";
            _this.requestedNewJson = true;
        }, function (error) {
            console.log("Failed to retrieve url...");
            _this.requestedNewJson = false;
            _this.title = "Tried to get New Json Data";
            _this.url = "";
        }, function () { });
    };
    JsonComponent.prototype.postNewJson = function () {
        var _this = this;
        //call edit user if needed
        console.log("Postsing Url is: " + this.url);
        this.userSubscription = this._jsonService.postJsonData(this.url)
            .subscribe(function (data) {
            _this.users = data;
            _this.title = "Got New Json Data";
            _this.requestedNewJson = true;
        }, function (error) {
            console.log("Failed to retrieve url...");
            _this.requestedNewJson = false;
            _this.title = "Tried to get New Json Data";
            _this.url = "";
        }, function () { });
    };
    JsonComponent = __decorate([
        core_1.Component({
            selector: 'posts',
            templateUrl: 'app/json/json-component.html'
        }), 
        __metadata('design:paramtypes', [json_service_1.JsonService])
    ], JsonComponent);
    return JsonComponent;
}());
exports.JsonComponent = JsonComponent;
//# sourceMappingURL=json.component.js.map