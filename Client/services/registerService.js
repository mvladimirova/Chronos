/**
 * Created by Marianna on 17-Jan-15.
 */
var service = angular.module('app.services', []);

service.factory('RegisterService', function($http){
    var checkNewUser = function(password){
        if(typeof password !== 'string'){
            return false;
        }
        if(password.length<6){
            return false;
        }

        var regEx = /^(?=.*[a-z])(?=.*[a-z])(?=.*\d)$.+/;

        return regEx.test(password);
    };

    return {
        checkUser: function(newUser){
            var checked = checkNewUser(newUser.password);
            return checked;
        }
    }
});