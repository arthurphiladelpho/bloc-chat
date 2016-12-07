(function(){
	function UsernameModalCtrl($scope, $modalInstance, $cookies){
        
        $scope.add = function(){
        	// retrieve value of placeholder and console.log it
        	var newUser = document.getElementById('newUser').value;
        	
        	if(newUser == false){
                alert('Please create a user.');
                console.log('New User Must Be Defined.');
            } else {
                console.log('creating ' + newUser + ' user!');
                //save username as cookie
                $cookies.put('blocChatCurrentUser', newUser);
                $modalInstance.dismiss('Close window.');
            }
            
        };

	}

	angular
			.module('blocChat')
			.controller('UsernameModalCtrl', ['$scope', '$modalInstance', '$cookies', UsernameModalCtrl ]);

})();
