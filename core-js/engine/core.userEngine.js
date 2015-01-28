/**
 * Created by Bozhidar on 17.1.2015 г..
 */

"use strict";

var userModel = require('../db/models').user,
    security = require('./core.userEngine.security'),
    q = require('q'),
    uuid = require('uuid');


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


var login = function(loginInformation, client){
    var deferred = q.defer();

    userModel.findOne({$or:[{userName: loginInformation.userName}, {email: loginInformation.userName}]})
        .exec()
        .then(function(document){

        });

};

var cacheIfValid = function (document,client){
    var deferred = q.defer();

    security.validatePassword(loginInformation.password, document.password.password, password.password.salt)
        .then(function(result){
            if(result === false){
                deferred.reject(new Error('Invalid user name or password'))
            }

            client.
            client.set()
        });

    deferred.promise;
};

var isLogedIn = function(token, client){
    var deferred = q.defer();

    client.get(token, function(err, reply){
        if(error){
            deferred.reject(error);
        } else{
          deferred.resolve(reply);
        }
    });

    return deferred.promise;
};

exports.isLogedIn = isLogedIn;