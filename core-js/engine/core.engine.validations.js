/**
 * Created by Bozhidar on 27.12.2014 г..
 */
"use strict";

function userValidations() {}

userValidations.validatePassword = function (password) {
    if (typeof password !== 'string') {
        return false;
    }
    if (password.length < 6) {
        return false;
    }
    
    // test for lower case, upper case and digit 
    var regEx = /^(?=.*[a-z])(?=.*[a-z])(?=.*\d)$.+/;

    return regEx.test(password);
};

exports.userValidator = userValidations;