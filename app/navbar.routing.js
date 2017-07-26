"use strict";
var router_1 = require('@angular/router');
var json_component_1 = require('./json/json.component');
var posts_component_1 = require('./posts/posts.component');
var users_component_1 = require('./users/users.component');
var users_new_component_1 = require('./users/users-new.component');
var users_edit_component_1 = require('./users/users-edit.component');
var home_component_1 = require('./home.component');
var not_found_component_1 = require('./not-found.component');
var prevent_unsaved_changes_guard_service_1 = require('./prevent-unsaved-changes-guard.service');
exports.customRouting = router_1.RouterModule.forRoot([
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'users',
        component: users_component_1.UsersComponent,
        canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
    },
    {
        path: 'users/new',
        component: users_new_component_1.UsersNewComponent,
        canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
    },
    {
        path: 'users/:id',
        component: users_edit_component_1.UsersEditComponent,
        canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
    },
    {
        path: 'users/delete/:deleteId',
        component: users_edit_component_1.UsersEditComponent,
        canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
    },
    {
        path: 'posts',
        component: posts_component_1.PostsComponent,
        canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
    },
    {
        path: 'json',
        component: json_component_1.JsonComponent,
        canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
    },
    { path: '**', component: not_found_component_1.NotFoundComponent }
]);
//# sourceMappingURL=navbar.routing.js.map