/**
 * Created by Bozhidar on 30.12.2014 г..
 */

var app = angular.module('app', ['ngResource', 'ngRoute', 'ui.bootstrap', 'app.services']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {templateUrl:'/' ,controller:'mainPage'});
}])

.controller('mainPage', function($scope, $modal, $log){
    $scope.title = "Chronos - Event Planer";

    $scope.openLogIn = function(size){
        var modal = $modal.open({
            templateUrl: 'logIn.html',
            controller: 'LoginController',
            size: size
        })
    };
    $scope.openRegister = function(size){
        var modal = $modal.open({
            templateUrl: 'register.html',
            controller: 'RegisterController',
            size: size
        })
    }
})

.controller('LoginController', function($scope, $modalInstance){
    $scope.user = {userName: '', password: ''};
    $scope.closeModal = function(){
        $modalInstance.dismiss('cancel');
    };
    $scope.logIn = function(){
        console.log($scope.user);
        $modalInstance.dismiss('cancel');
    }
})

.controller('RegisterController', function($scope, $modalInstance, RegisterService){
    $scope.newUser = {
        userName: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: ''
    };
    $scope.closeModal = function(){
        $modalInstance.dismiss('cancel');
    };
    $scope.register = function(){
        console.log($scope.newUser);
        RegisterService.checkUser($scope.newUser);
        $modalInstance.dismiss('cancel');
    }
});