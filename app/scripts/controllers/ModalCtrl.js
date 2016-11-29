(function(){
	function ModalCtrl($scope, $modalInstance, Room){
		$scope.close = function(){
            $modalInstance.dismiss('Close window.');
        };
    // Write function to retrieve value of placeholder and user Angular Fire's $add 
    // to create a new database record and add it to the sidebar.
    $scope.add = function(){
    	// retrieve value of placeholder and console.log it
    	var newRoom = document.getElementById('newRoom').value;
    	console.log('adding ' + newRoom + ' room...');
    	// When I try to use $add on the rooms array I get a Reference Error, rooms is not defined.
    	// How can I reference it?
    	console.log(Room.all);
        Room.all.$add(newRoom);    
    };

	}

	angular
			.module('blocChat')
			.controller('ModalCtrl', ['$scope', '$modalInstance', 'Room', ModalCtrl ]);

})();
