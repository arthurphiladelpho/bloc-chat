(function(){
	function UsernameModalCtrl($scope, $modalInstance){
        
        $scope.add = function(){
        	// retrieve value of placeholder and console.log it
        	var newUser = document.getElementById('newUser').value;
        	console.log('creating ' + newUser + ' user!');
        	
            // Room.all.$add(newRoom);    
        };

	}

	angular
			.module('blocChat')
			.controller('UsernameModalCtrl', ['$scope', '$modalInstance', UsernameModalCtrl ]);

})();
