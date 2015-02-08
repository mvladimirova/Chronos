/**
 * Created by Bozhidar on 30.12.2014 г..
 */

var app = angular.module('app', ['ngResource', 'ngRoute', 'ui.bootstrap', 'app.services']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {templateUrl:'/' ,controller:'pageHeader'});
}])

.controller('pageHeader', function($scope, $modal, $log){
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

.controller('LoginController', function($scope, $http, $window, $modalInstance){
    $scope.user = {userName: '', password: ''};
    $scope.closeModal = function(){
        $modalInstance.dismiss('cancel');
    };
    $scope.logIn = function(){
        $http
            .post('/login', $scope.user)
            .success(function(data, status, headers, config){
                delete $window.sessionStorage.token;
            });
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
        lastName: '',
        email: ''
    };
    $scope.closeModal = function(){
        $modalInstance.dismiss('cancel');
    };
    $scope.register = function(){
        console.log($scope.newUser);
        var checked = RegisterService.checkUser($scope.newUser);
        if(checked) {
            RegisterService.createUser($scope.newUser);
            $modalInstance.dismiss('cancel');
        }
    }
})

.controller('CalendarController', function($scope){
        if (!$scope.year || !$scope.month) {
            var today = moment();
            $scope.year = today.year();
            $scope.month = today.month();
        }
        $scope.weeks = [];
        update_month();
        $scope.$watch('year', update_month);
        $scope.$watch('month', update_month);
        $scope.previous_month = function() {
            var date = $scope.date.clone().subtract(1, 'months');
            $scope.year = date.year();
            $scope.month = date.month();
        };
        $scope.next_month = function() {
            var date = $scope.date.clone().add(1, 'months');
            $scope.year = date.year();
            $scope.month = date.month();
        };
        function update_month() {
            var date = moment([$scope.year, $scope.month]),
                weeks = [],
                week = [];
            $scope.date = date.clone();
            date = date.startOf('week');
            function push_date(other_month) {
                if (week.length == 7) {
                    weeks.push(week);
                    week = [];
                }
                week.push({
                    other: other_month,
                    today: today.year() == date.year() &&
                    today.month() == date.month() &&
                    today.date() == date.date(),
                    number: date.date(),
                    date: date.clone(),
                    //tasks: Task.query_for_date({date: date.format('YYYY-MM-DD')})
                });
                date.add(1, 'days');
            }
// Days before start of month
            while (date.month() != $scope.month) {
                push_date(true);
            }
// Days of month
            while (date.month() == $scope.month) {
                push_date(false);
            }
// Days after the end of the month
            while (week.length < 7) {
                push_date(true);
            }
            weeks.push(week);
            $scope.weeks = weeks;
        }

});