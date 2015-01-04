/**
 * Created by Bozhidar on 30.12.2014 г..
 */

angular.module('app', ['ngResource', 'mgRoute', 'eventPlanerApp']);

angular.module.('app').config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {templateUrl:'/' ,controller:'../controllers/homePageController'});
});