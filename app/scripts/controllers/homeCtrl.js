(function(){
	function HomeCtrl($scope, Room){
		$scope.title = 'Bloc Chat';
		$scope.rooms = Room.all;
		for(var i = 0; i < 3; i++){
			$scope.rooms.push({
				title : 'Room',
				number : i
			});
		}
		console.log('**********');
		console.log($scope.rooms);
	}

	angular
			.module('blocChat')
			.controller('HomeCtrl', [ '$scope', 'Room', HomeCtrl]);

})();
