//api key 3656d7b3242d336d2508e90499daceff

LocalWeather = angular.module('LocalWeather', [])

LocalWeather.controller('getWeather', ['$scope', '$http', function($scope,$http) {


	function getLocation(){
	    if(navigator.geolocation){
	      // console.log(navigator.geolocation.getCurrentPositon());
	      navigator.geolocation.getCurrentPosition(function(position) {
	        console.log(position);
	        $scope.lat = position.coords.latitude;
	        $scope.lng = position.coords.longitude;
	    	});
	    }
	}

	$scope.Populate = function() {
		$http({
			method: 'GET',
			url : 'api.openweathermap.org/data/2.5/weather?APPID=3656d7b3242d336d2508e90499daceff',
			params: {
				lat: $scope.lat,
				lon: $scope.lng,
				units: 'imperial'
			}
		}).then(function success(response) {
			console.log('success', response);
			$scope.res = response.data;
		}, function error(response) {
			console.log('error', response);
		})
	}
	$scope.Populate();

}])