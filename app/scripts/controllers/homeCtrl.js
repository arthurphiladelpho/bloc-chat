(function(){
	function HomeCtrl($scope, $modal, Room){
		$scope.title = 'Bloc Chat';

		$scope.rooms = Room.all;

		console.log(Room.all);

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
			.controller('HomeCtrl', [ '$scope', '$modal', 'Room', HomeCtrl]);

})();
