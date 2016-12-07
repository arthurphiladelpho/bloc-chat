(function() {
  function Messages($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);
    
    return {

      send: function(newMessageText, room){
              return messages.$add({
                content: newMessageText,
                roomId: room.$id,
                username: $cookies.get('blocChatCurrentUser'),
                time: Date.now()
              });
            }
    };

  }

  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', '$cookies', Messages]);
})();