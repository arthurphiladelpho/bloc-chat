(function(){

	function config($stateProvider, $locationProvider){
		$locationProvider
			.html5Mode({
			   enabled: true,
			   requireBase: false
			});

		$stateProvider
			.state('home', {
				url: '/',
				controller: 'HomeCtrl as home',
				templateUrl: '/templates/home.html'
			})
			.state( 'home.monstro', {
				url: 'monstro',
				controller: 'MonstroCtrl',
				templateUrl: '/templates/monstro.html'
			})
			.state( 'home.champ', {
				url: 'champ',
				controller: 'ChampCtrl',
				templateUrl: '/templates/champ.html'
			})
			;
	}

	angular
		.module('blocChat', ['firebase', 'ui.bootstrap', 'ui.router'])
		.config(config);

})();