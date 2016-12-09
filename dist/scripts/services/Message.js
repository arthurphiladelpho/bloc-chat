(function() {
	function Message($firebaseArray, $cookies) {
		var firebaseRef = new Firebase('https://blistering-fire-7074.firebaseio.com');
		var messageRef = $firebaseArray(firebaseRef.child('messages'));
		
		return {
			send: function(newMessage, roomID) {
				var message = {
					username: $cookies.get('blocChatCurrentUser'),
					content: newMessage,
					sentAt: timeFormat(),
					roomID: roomID
				}
				messageRef.$add(message);
			}
		};
		
		
	}
	
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', '$cookies', Message]);
})();