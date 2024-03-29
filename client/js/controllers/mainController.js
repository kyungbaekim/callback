callback_app.controller("mainController",function($scope, $location, $routeParams, moment, $window, logRegFactory, algorithmFactory) {

	$scope.user = logRegFactory.getUser();

	$scope.users = logRegFactory.getUsers(function(data){
		$scope.allUsers = data
	});

	$scope.algorithms = algorithmFactory.getAlgorithms(function(data){
		$scope.allAlgorithms = data
	})

})
