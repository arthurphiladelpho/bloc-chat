(function(){
	function ModalCtrl($scope, $modalInstance){
		$scope.close = function(){
      $modalInstance.dismiss('Close window.');
    };

	}

	angular
			.module('blocChat')
			.controller('ModalCtrl', ['$scope', '$modalInstance', ModalCtrl ]);

})();
