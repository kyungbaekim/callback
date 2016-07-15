callback_app.controller("algorithmController",function($scope, $location, $routeParams, moment, $window, algorithmFactory, logRegFactory) {

	$scope.addAlgorithm = function(algorithm){
		algorithm._user = logRegFactory.getUser();
		console.log(algorithm);
		algorithmFactory.addAlgorithm(algorithm);
	}

	getAlgorithm = function(){
		id = $routeParams.alg_id;
    console.log("In controller", id);
    algorithmFactory.getAlgorithm(id, function(data){
      $scope.algorithm = data;
    });
	}
	getAlgorithm();
})
