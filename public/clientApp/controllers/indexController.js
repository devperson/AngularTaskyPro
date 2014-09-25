angular.module('clientApp').controller('indexController',['$scope', function($scope)
{

    $scope.text="";
    $scope.isEdit=false;
    $scope.tasks = [];
     var id=0;
    $scope.addNewTask = function(){
        id = ++id;
        var task = {id:id,text: $scope.text, isEdit:false};
        $scope.tasks.push(task);
        $scope.text='';
    };

    var lastTaskEdited;
    $scope.startEdit = function(task){
        if(lastTaskEdited)
            lastTaskEdited.isEdit=false;
        task.isEdit = true;
        lastTaskEdited = task;
    };

    $scope.endEdit = function(task){
        task.isEdit = false
    };

    $scope.removeTask = function(task){
        $scope.tasks.remove(task);
    };

}]);
