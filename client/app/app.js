/**
 * Created by Bozhidar on 30.12.2014 г..
 */

var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {templateUrl:'/' ,controller:'mainPage'});
}])

.controller('mainPage', function($scope){
    $scope.title = "Chronos - Event Planer"
});