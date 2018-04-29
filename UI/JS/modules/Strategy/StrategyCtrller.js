angular.module('bufferStrategyCtrl', []).controller(
		'BufferStrategyCtrl',
		function($scope,$state, $controller,
				SidebarService) {

			$scope.gridOptions1 = {};
			$scope.gridOptions2 = {};
			$scope.gridOptions3 = {};
			
			$scope.$watch(
		    		  function() { return SidebarService.ApplyButtonClick; },
		    		  function(newValue, oldValue) {
		    			  console.log("Menu Changed: "+newValue);
		    		  }
		    		);
			 
			 $controller('WatchListCtrl', {
	                $scope: $scope
	            });
			 
			 $controller('DetailsCtrl', {
	                $scope: $scope
	            });
			 
			 
			
		});
