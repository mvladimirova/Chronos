/**
 * Created by Marianna on 08-Feb-15.
 */
var login = angular.module('app.login', []);

login.controller('LoginController', function($scope, $http, $window, $modalInstance){
    $scope.loginInformation = {userName: '', password: ''};
    var data = {
        loginInformation: $scope.loginInformation
    };
    $scope.closeModal = function(){
        $modalInstance.dismiss('cancel');
    };
    $scope.logIn = function(){
        $http
            .post('/login', data)
            .success(function(data, status, headers, config){
                $window.sessionStorage.token = data.token;
            })
            .error(function(data, status, headers, config){
                delete $window.sessionStorage.token;
            });
        $modalInstance.dismiss('cancel');
        var loginButton = $('#log-in-btn');
        loginButton[0].style.display = "none";

        var registerButton = $('#register-btn');
        registerButton[0].style.display = "none";

        var logoutButton = $('#log-out-btn');
        logoutButton[0].style.display = "block";


    };
});