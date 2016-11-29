(function(){
	function ModalCtrl($scope, $modalInstance){
		$scope.close = function(){
      $modalInstance.dismiss('Close window.');
    };
    // Write function to retrieve value of placeholder and user Angular Fire's $add 
    // to create a new database record and add it to the sidebar.
    $scope.add = function(){
    	// retrieve value of placeholder and console.log it
    	var newName = document.getElementById('newRoom').value;
    	console.log('adding ' + newName + ' room...');
    	// When I try to use $add on the rooms array I get a Reference Error, rooms is not defined.
    	// How can I reference it?
    	rooms.$add(newName);
    };

	}

	angular
			.module('blocChat')
			.controller('ModalCtrl', ['$scope', '$modalInstance', ModalCtrl ]);

})();
