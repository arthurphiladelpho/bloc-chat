(function(){
	function HomeCtrl($rootScope, $modal, Room){
		$rootScope.title = 'Bloc Chat';

		$rootScope.rooms = Room.all;
		
		$rootScope.activeRoom = null;

		console.log(Room.all);

		$rootScope.open = function(){
			console.log('opening modal...');
			var modalInstance = $modal.open({
				templateUrl: '/templates/modal.html',
				controller: 'ModalCtrl'
			});
			console.log('modal open!')
		};

		$rootScope.setRoom = function(newRoomID){
			console.log('setting room....')
			$rootScope.activeRoom = Room.getRoom(newRoomID);
			console.log('room set!')
			$rootScope.roomMessages = Room.getMessages(newRoomID);
			console.log('Active room is ' + $rootScope.activeRoom);

		};

		$rootScope.sendMessage = function(newMessage) {
		  $rootScope.newMessage = {};
		  Message.send(newMessage.text, $rootScope.activeRoom);
		};


		
	}

	angular
			.module('blocChat')
			.controller('HomeCtrl', [ '$rootScope', '$modal', 'Room', HomeCtrl]);

})();
