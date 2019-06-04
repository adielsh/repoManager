'use strict';

angular.module('myApp.view1', ['ngRoute'])
	.config(['$routeProvider','$httpProvider', function ($routeProvider,$httpProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'view1/view1.html',
			controller: 'View1Ctrl'
		});
		//$httpProvider.defaults.withCredentials = true;
	}])

	.controller('View1Ctrl', ['$scope', '$http', function ($scope, $http) {
		var githubUrl = "https://api.github.com/search/repositories?q="
		var serverUrl = "http://localhost:64635/api/values";
		$scope.loading = false;
		//$httpProvider.defaults.withCredentials = true;
		$scope.onSearch = function () {
			$scope.loading = true;
			//console.log($scope.searchInput);
			$http({
				method: "GET",
				url: githubUrl + $scope.searchInput,
			}).then(function mySuccess(response) {
				console.log(response.data);
				$scope.loading = false;
				$scope.myWelcome = response.data.items;
			}, function myError(response) {
				console.log(response.statusText);
				$scope.loading = false;
				$scope.myWelcome = response.statusText;
			});

		};

		$scope.addToFavorite = function(name){

			// var data = $.param({
			// 	name : name
			// });
			// var data = {name};
			// var config = {
			//  	headers: {
			// 	'Content-type':'application/json;'
			// 	}
			// }

			// $http.post(serverUrl, data, config)
			// 	.then(
			// 		function (response) {
			// 			// success callback
			// 		},
			// 		function (response) {
			// 			// failure callback
			// 		}
			// 	);

			var data = {name};
			$http({
				url: serverUrl,
				method: "POST",
				params: data,
				withCredentials :true
			})
					.then(
					function (response) {
						// success callback
					},
					function (response) {
						// failure callback
					}
				);

			}
	
	}]);