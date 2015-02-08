/**
 * Created by Marianna on 07-Feb-15.
 */
var app = angular.module('calendar', []);

app.directive('calendar', ['Task', function(Task){
    return {
        scope: {},
        controller: 'CalendarController',
        templateUrl: 'app/calendar.html'
    }
}]);