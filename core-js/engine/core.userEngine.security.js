/**
 * Created by Bozhidar on 27.12.2014 г..
 */
"use strict";

var crypto = require('crypto'),
    q = require('q');

exports.hashPassword = function(password){
    var deferred = q.defer(),
        keylen = 16,
        salt = crypto.randomBytes(256).toString('base64');

    crypto.pbkdf2(password, salt, 512, keylen, function(err, hashedPassword){
        if(err){
            deferred.reject(err);
        }
        deferred.resolve({password: hashedPassword, salt: salt});
    });

    return deferred.promise;
};

exports.validatePassword = function(password, passwordHash, passwordSalt) {
    var deferred = q.Defer();

    if(typeof password === null || typeof password === 'undefined'){
        deferred.resolve(false);
    }

    crypto.pbkdf2(password, passwordSalt, 512, keylen, function(err, hashedPassword){
        if(err){
            deferred.reject(err);
        }
        deferred.resolve(hashedPassword === passwordHash);
    });

    return deferred.promise;
};
