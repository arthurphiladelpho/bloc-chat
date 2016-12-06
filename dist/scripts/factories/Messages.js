(function() {
  function Messages($firebaseArray) {
    var ref = firebase.database().ref().child('messages');
    var messages = $firebaseArray(ref);
    
    return {
      getByRoomId: function (roomId) {
        // checkpoint 4
      },
      send: function(newMessage) {
        // checkpoint 6
      }
    };

  }

  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', Messages]);
})();