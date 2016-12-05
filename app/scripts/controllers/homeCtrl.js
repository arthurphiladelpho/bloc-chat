(function(){
	function HomeCtrl($scope, $modal, Room){
		$scope.title = 'Bloc Chat';

		$scope.rooms = Room.all;
		
		$scope.activeRoom = null;

		console.log(Room.all);

		$scope.open = function(){
			console.log('opening modal...');
			var modalInstance = $modal.open({
				templateUrl: '/templates/modal.html',
				controller: 'ModalCtrl'
			});
			console.log('modal open!')
		};

		$scope.setRoom = function(activeId){
			console.log('setting room....')
			$scope.activeRoom = activeId;
			console.log('room set!')
			console.log('Active room is ' + $scope.activeRoom);
		};


		
	}

	angular
			.module('blocChat')
			.controller('HomeCtrl', [ '$scope', '$modal', 'Room', HomeCtrl]);

})();
