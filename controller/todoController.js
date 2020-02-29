

var app = angular.module('todoApp',[]);
app.controller('todoController',function($scope){
    $scope.tasks = [];

    $scope.addTask = function () {
        // $scope.tasks.push($scope.todoList);
        console.log($scope.tasks);
        $scope.showTask = $scope.todoList;
    }
})