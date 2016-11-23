(function(){
	function HomeCtrl(){
		alert('hello world');
	}

	angular
			.module('blocChat')
			.controller('HomeCtrl', HomeCtrl);

})();