/**
 * Created by Bozhidar on 30.12.2014 г..
 */

var app = angular.module('app', ['ngResource', 'ngRoute', 'ui.bootstrap', 'app.services', 'app.login', 'app.register',
    'calendar', 'ngAside']);

app.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider){
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
    $routeProvider
        .when('/', {templateUrl:'/' ,controller:'pageHeader'});
}])

    .controller('pageHeader', function($scope, $modal, $log, $aside){
        $scope.title = "Chronos - Event Planer";

        $scope.openLogIn = function($event,size){
            var modal = $modal.open({
                templateUrl: 'logIn.html',
                controller: 'LoginController',
                size: size
            });

        };
        $scope.openRegister = function(size){
            var modal = $modal.open({
                templateUrl: 'register.html',
                controller: 'RegisterController',
                size: size
            })
        };
        $scope.showGroups = function(size){
            var aside = $aside.open({
                templateUrl: 'groups.html',
                controller: 'AsideController',
                placement: 'right',
                size: size
            });
        }
    })
    .controller('AsideController', function($scope, $modalInstance){
        $scope.text = "Something"
    })

    .factory('authInterceptor', function($rootScope, $q, $window){
        return {
            request: function(config){
                config.headers = config.headers || {};
                if($window.sessionStorage.token){
                    config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
                }
                return config;
            },
            response: function(response){
                if(response.status === 401){
                    console.log("Error");
                }
                return response || $q.when(response);
            }
        }
    });