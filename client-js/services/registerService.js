/**
 * Created by Marianna on 17-Jan-15.
 */
var service = angular.module('app.services', []);

service.factory('RegisterService', function($http){
    var checkNewUser = function(password, confirmPassword){
        if(typeof password !== 'string'){
            return false;
        }
        if(password.length<6){
            return false;
        }
        if(password !== confirmPassword){
            var confirmField = document.getElementById('confirm-password');
            var node = document.createElement('span');
            node.className = 'glyphicon glyphicon-remove';
            $(node).insertAfter(confirmField);

            return false;
        }

        var regEx = /^(?=.*[a-z])(?=.*[a-z])(?=.*\d).+$/;

        return regEx.test(password);
    };

    var createNewUser = function(newUser){
        $http({
            method: 'POST',
            url: '/register',
            data: {
                'user':{
                    'userName': newUser.userName,
                    'email': newUser.email,
                    'name':{
                        'firstName': newUser.firstName,
                        'lastName': newUser.lastName
                    },
                    'password': newUser.password
                }

            }
        }).success(function(data, status, headers, congif){
            console.log(status);
        }).error(function(data, status, headers, config){
            console.log(status);
        });

    };

    return {
        checkUser: function(newUser){
            var checked = checkNewUser(newUser.password, newUser.confirmPassword);
            return checked;
        },
        createUser: function(newUser){
            return createNewUser(newUser);
        }
    }
});