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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var users_service_1 = require('./users.service');
var user_1 = require('./user');
var customValidators_1 = require('../validators/customValidators');
var UsersEditComponent = (function () {
    function UsersEditComponent(_formBuilder, _userService, _router, _route) {
        this._userService = _userService;
        this._router = _router;
        this._route = _route;
        this.title = "Edit User";
        //init blank user for 2 way binding
        this.user = new user_1.User();
        this.user.address = {};
        this.form = _formBuilder.group({
            username: ['', forms_1.Validators.required],
            email: ['', [forms_1.Validators.required, customValidators_1.validateEmail]],
            street: [''],
            suite: [],
            city: [],
            zipcode: [],
            phone: []
        });
    }
    UsersEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._route.params.subscribe(function (params) {
            _this.id = params["deleteId"];
            if (_this.id) {
                //This is a delete
                _this.title = "Delete User";
                _this.isDelete = true;
            }
            else {
                _this.title = "Edit User";
                _this.id = +params["id"];
            }
            _this._userService.getUserAtIndex(_this.id).subscribe(function (data) {
                console.log("This is the data I got at index: " + 1);
                console.log(data);
                _this.user = data;
            });
        });
    };
    UsersEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    UsersEditComponent.prototype.hasUnsavedChanges = function () {
        if (this.form.dirty) {
            return true;
        }
        return false;
    };
    UsersEditComponent.prototype.addUser = function (formGroup) {
        var _this = this;
        //mark form pristine so you can leave
        this.form.markAsPristine();
        //call edit user if needed
        this._userService.editUser(this.user, this.id).subscribe(function (x) {
            //after subscribing and validating data, route to user
            console.log("Added a new User, now navigating outta here!!");
            _this._router.navigate(['users']);
        }, function (err) {
            console.log("User Service errored out, do something");
        }, function () {
            //do something here if needed when completed
        });
    };
    UsersEditComponent = __decorate([
        core_1.Component({
            selector: 'users-edit',
            templateUrl: 'app/users/users-form.component.html',
            providers: [forms_1.FormBuilder]
        }),
        __param(0, core_1.Inject(forms_1.FormBuilder)), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, users_service_1.UsersService, router_1.Router, router_1.ActivatedRoute])
    ], UsersEditComponent);
    return UsersEditComponent;
}());
exports.UsersEditComponent = UsersEditComponent;
//# sourceMappingURL=users-edit.component.js.map