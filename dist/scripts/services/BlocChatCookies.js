(function() {
  function BlocChatCookies($cookies, $modal) {
  	console.log('looking for username.....');
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username
      console.log('username has to be set...');
      $modal.open({
        templateUrl: '/templates/usernameModal.html',
        controller: 'UsernameModalCtrl'
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$modal', BlocChatCookies]);
})();