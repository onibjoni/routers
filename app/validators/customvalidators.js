"use strict";
exports.validateEmail = function validateEmail(c) {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (c.value != null
        && c.value != ""
        && (c.value.length <= 5 || !EMAIL_REGEXP.test(c.value))) {
        return {
            containsAt: false
        };
    }
    //validation passes
    return null;
};
//# sourceMappingURL=customValidators.js.map