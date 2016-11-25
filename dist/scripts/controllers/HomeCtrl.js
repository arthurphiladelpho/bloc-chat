(function(){
	function HomeCtrl($scope, Room){
		$scope.title = 'Bloc Chat';
		$scope.rooms = Room.all;
		
	}

	angular
			.module('blocChat')
			.controller('HomeCtrl', [ '$scope', 'Room', HomeCtrl]);

})();
