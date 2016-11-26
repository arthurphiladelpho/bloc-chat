(function(){
	function ModalDemoCtrl($uibModal, $log, $document){
		var $ctrl = this;
    $ctrl.items = ['item1', 'item2', 'item3'];
    $ctrl.animationsEnabled = true;
    $ctrl.open = function (size, parentSelector) {
    var parentElem = document.getElementByTagName("body");
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });
  };

	}

	angular
			.module('blocChat')
			.controller('ModalDemoCtrl', ['$uibModal', '$log', '$document', ModalDemoCtrl ]);

})();


// $uibModal is a service to create modal windows. 
// Creating modals is straightforward: create a template and controller, and reference them when using $uibModal.