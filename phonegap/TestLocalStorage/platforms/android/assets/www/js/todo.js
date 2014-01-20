function TodoCtrl($scope) {
	var x = localStorage.test != undefined ? JSON.parse(localStorage.test) : "undefined";
	$scope.todos = [];
	if (x != "undefined"){
		for (var i in x){
			$scope.todos.push({
				text : x[i].text,
				done : x[i].done
			});
		}
	}
	
  $scope.addTodo = function() {
  	if ($scope.todoText != undefined){
  		$scope.todos.push({
        	text:$scope.todoText, 
        	done:false
    	});
    	$scope.todoText = '';
    	localStorage.test = JSON.stringify($scope.todos);
  	}  
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
    localStorage.test = JSON.stringify($scope.todos);
  };
}