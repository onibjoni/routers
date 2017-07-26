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
var users_service_1 = require('./users.service');
var UsersComponent = (function () {
    function UsersComponent(_service) {
        this._service = _service;
        this.title = "New User";
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._service.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    UsersComponent.prototype.hasUnsavedChanges = function () {
        return false;
    };
    UsersComponent.prototype.quickDelete = function (deleteId) {
        if (confirm("Are you sure you Want to Delete: " + deleteId)) {
            //delete
            this._service.delteUser(deleteId);
        }
        else {
        }
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'users',
            template: "<h1>Users</h1>\n        <a class=\"btn btn-primary extrapad\" href=\"users/new\">Add User</a>\n        <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Email</th>\n                    <th>Edit</th>\n                    <th>Delete</th>\n                    <th>Quick Delete</th>\n                </tr>\n            </thead>\n            <tr *ngFor=\"let u of users\">\n                <td> {{ u.name }} </td>\n                <td> {{ u.email }} </td>\n                <td><a href=\"users/{{u.id}}\"><span class=\"glyphicon glyphicon-edit\"></span></a></td>\n                <td><a href=\"users/delete/{{u.id}}\"><span class=\"glyphicon glyphicon-remove\"></span></a></td>\n                <td><a (click)=\"quickDelete(u.id)\"><span class=\"glyphicon glyphicon-remove\"></span></a></td>\n            </tr>\n         </table>   \n    ",
            styles: ["\n        .extrapad {\n            margin: 15px;\n        }    \n    "]
        }), 
        __metadata('design:paramtypes', [users_service_1.UsersService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map