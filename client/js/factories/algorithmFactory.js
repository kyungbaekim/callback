callback_app.factory("algorithmFactory", function($http, $location, $sessionStorage){
	var factory = {}
	factory.addAlgorithm = function(algorithm){
		$http.post('/addAlgorithm', algorithm).success(function(data){

		})
	}

	factory.getAlgorithms = function(callback){
		$http.get('/getAlgorithms').success(function(data){
			console.log(data)
			callback(data)
		})
	}

	factory.getAlgorithm = function(id, callback){
		console.log("In Factory", id)
		$http.get('/getAlgorithm/' + id).success(function(data){
			console.log(data)
			callback(data);
		})
	}

	return factory
})
