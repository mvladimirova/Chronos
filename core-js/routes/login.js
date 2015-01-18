/**
 * Created by Bozhidar on 23.12.2014
 * Contains the login and create new user functionality
 */
"use strict";
var userEngine = require('../engine/core.userEngine'),
    userValidations = require('../engine/core.engine.validations').userValidations;


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
    var userObject = req.body.user;

    if(typeof userObject === 'undefined') {
        res.status(500).send('Invalid user context');
    }

    if(userValidations.validatePassword(userObject['password']) === false){
        res.status(500).send("Password is not secure enough!");
    }

    userEngine.creteUser(userObject)
        .then(function(context){
            console.log('I am not slow!');
            res.status(200).send("New user successfully created!");
        })
        .catch(function(error){
            res.status(500).send('User failed to register');
        });
};