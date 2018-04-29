// appRoutes.js
angular.module('appRoutes', []).config(
		function($stateProvider, $urlRouterProvider, $locationProvider) {

			/* To Enable MBR Change uncomment the below lines (9 to 31) */
			$urlRouterProvider.otherwise("/bufferStrategy/watchlist");

			$stateProvider
			.state('BufferStrategy', {
				url : '/bufferStrategy',
				views : {
					'header' : {
						templateUrl : 'common/Header.html',
					},
					'menu' : {
						templateUrl : 'Modules/Sidebar/SidebarBS.html',
						controller : 'SidebarCtrlBS'
					},
					'panel' : {
						templateUrl : 'common/Panel.html'
					},
					'body' : {
						templateUrl : 'common/Body.html',
						controller:'BufferStrategyCtrl'
					},
					'footer' : {
						templateUrl : 'common/Footer.html'
					}
				}
			})
			.state('BufferStrategy.watchlist', {
				url : '/watchlist',
				views : {
					'body' : {
						templateUrl : 'Modules/BufferStrategy/WatchList/WatchList.html',
					}
				}
			})
			
			
			.state('BufferStrategy.details', {
				url : '/details',
				views : {
					'body' : {
						templateUrl : 'Modules/BufferStrategy/Details/Details.html',
					}
				}
			})

		});