/**
 * Created by Bozhidar on 23.12.2014
 * Contains the login and create new user functionality
 */
"use strict";
var userEngine = require('../engine/core.userEngine'),
    userValidation = require('../engine/core.engine.validations').userValidator;


exports.login = function(request, response){
    var body = request.body;
    if(body['username'] != 'test' || body['password'] != 'Asd123'){
        response.send(404, "Invalid UserName or Password");
    }
    else{
        response.body = {FirstName: 'Zaphod', LastName:"Beeblebrox"};
        response.status(200);
        response.send();
    }
};

exports.createNewUser = function(req, res){
    var userObject = req.body['userObject'];
    if(typeof userObject === 'undefined') {
        res.send(500, 'Invalid user context');
    }
    if(userValidation.validatePassword(userObject['password']) === false){
        res.send(500, "Password is not secure enough!");
    }

    userEngine.creteUser(userObject)
        .then(function(context){
            res.send(200, 'User registered successfully');
        })
        .catch(function(error){
            res.send(500, 'User failed to register');
        });


    res.send(201, "New user successfully created!");
};