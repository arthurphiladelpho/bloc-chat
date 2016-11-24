(function(){
	function HomeCtrl($scope, Room){
		$scope.title = 'Bloc Chat';
		$scope.all = Room.all;
		for(var i = 0; i < 3; i++){
			$scope.all.push({
				title : 'room'
			});
		}
		console.log($scope.all);
	}

	angular
			.module('blocChat')
			.controller('HomeCtrl', [ '$scope', 'Room', HomeCtrl]);

})();