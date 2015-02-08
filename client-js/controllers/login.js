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
                console.log('Welcome!');
            })
            .error(function(data, status, headers, config){
                delete $window.sessionStorage.token;

                console.log("Error");
            });
        console.log($scope.loginInformation);
        $modalInstance.dismiss('cancel');
    };
});