/**
 * Created by Bozhidar on 27.12.2014 г..
 */
"use strict";

var crypto = require('crypto'),
    Q = require('q');

var hashPassword = function(password){
    var deferred = Q.defer(),
        keylen = 16,
        salt = crypto.randomBytes(256).toString('base64');

    crypto.pbkdf2(password, salt, 512, keylen, function(err, hash){
        if(err){
            deferred.reject(err);
        }
        deferred.resolve({password: hashedPassword, salt: salt})
    });

    return deferred.promise;
};
