/**
 * Created by Bozhidar on 17.1.2015 г..
 */

"use strict";

var userModel = require('../db/models').user,
    security = require('./core.userEngine.security'),
    q = require('q');

exports.creteUser = function(userObject){
    var deferred = q.defer();
    security.hashPassword(userObject['password'])
        .then(function(passwordObject){
            var newUser = new userModel({
                userName: userObject['userName'],
                email: userObject['email'],
                name: userObject['name'],
                password: passwordObject,
                groups: null
            });

            newUser.save(function(err, newUser){
                if(err){
                    deferred.reject(err);
                }
                deferred.resolve(newUser);
            })
        });

    return deferred.promise;
};
