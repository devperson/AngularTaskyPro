angular.module('clientApp').controller('indexController',['$scope','$resource', function($scope, $resource)
{

    $scope.text="";
    $scope.isEdit=false;
    var id=0;
    var lastTaskEdited;

    var tasksResource = $resource('/api/tasks/:id', {id:'@_id'},{ update: { method: 'PUT'}});
    $scope.tasks = tasksResource.query();

    $scope.startEdit = function(task)
    {
        if(lastTaskEdited)
            lastTaskEdited.isEdit=false;
        task.isEdit = true;
        lastTaskEdited = task;
    };

    $scope.addNewTask = function(){
        id = ++id;
        var task = new tasksResource({ text: $scope.text, isEdit:false});
        task.$save(function(newTask)
        {
            $scope.tasks.push(newTask);
        })
//        $scope.tasks.push(task);
        $scope.text='';
    };

    $scope.endEdit = function(task)
    {
        task.isEdit = false;
        task.$update();
    };

    $scope.removeTask = function(task)
    {
        task.$remove(function()
        {
            $scope.tasks.remove(task);
        });
    };

}]);
