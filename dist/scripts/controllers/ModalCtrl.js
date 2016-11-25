(function(){
	function ModalCtrl(){
		alert('ModalCtrl working!!');	
	}

	angular
			.module('blocChat')
			.controller('ModalCtrl', [ ModalCtrl ]);

})();


// $uibModal is a service to create modal windows. 
// Creating modals is straightforward: create a template and controller, and reference them when using $uibModal.