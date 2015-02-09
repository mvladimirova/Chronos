/**
 * Created by Marianna on 08-Feb-15.
 */

var register = angular.module('app.register',[]);

register.controller('RegisterController', function($scope, $modalInstance, RegisterService){
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
        var checked = RegisterService.checkUser($scope.newUser);
        if(checked) {
            RegisterService.createUser($scope.newUser);
            $modalInstance.dismiss('cancel');
        }
    }
});