(function(){
	function HomeCtrl($scope, $modal){
		$scope.title = 'Bloc Chat';

		$scope.open = function(){
			console.log('opening modal...');
			var modalInstance = $modal.open({
				templateUrl: '/templates/modal.html',
				controller: 'ModalCtrl'
			});
		};
		
	}

	angular
			.module('blocChat')
			.controller('HomeCtrl', [ '$scope', '$modal', HomeCtrl]);

})();
