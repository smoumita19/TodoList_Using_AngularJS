

var app = angular.module('todoApp',[]);
app.controller('todoController',function($scope){
    $scope.tasks = [];

    $scope.addTask = function () {
        if($scope.enteredTask != ''){
            $scope.tasks.push({'taskGiven': $scope.enteredTask, 'status': false});
            $scope.enteredTask = '';
        }
        
    }
})