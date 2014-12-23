/**
 * Created by Bozhidar on 23.12.2014
 * Contains the login and create new user functionality
 */

exports.login = function(request, responce){
    responce.send("This URL will handle user login");
};

exports.createNewUser = function(request, responce){
    responce.send("This URL will handle user creation");
};