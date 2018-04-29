angular.module('watchListCtrl', []).controller('WatchListCtrl', function($scope,SidebarService) {

    
    $scope.gridOptions1.table = {
    		enableSorting: false,
    		enableVerticalScrollbar:0,
    		columnDefs: [
                   	      { field: 'items',displayName:'ITEMS', enableColumnMenu: false },
                	      { field: 'org',displayName:'ORG', enableColumnMenu: false },
                	      { field: 'avgss',displayName:'AVG SS', enableSorting: false , enableColumnMenu: false  },
                	      { field: 'sdr',displayName:'SS/DDLT RATIO', enableColumnMenu: false}
                	      ],	
    		data:[ {
					"items" : "800-30322-02",
					"org" : "FCZ",
					"avgss" : "0",
					"sdr" : "0"
				}, {
					"items" : "800-30322-02",
					"org" : "FTX",
					"avgss" : "0",
					"sdr" : "0"
				}, {
					"items" : "800-30208-06",
					"org" : "FCZ",
					"avgss" : "1.65",
					"sdr" : "0.02"
				}],
			    onRegisterApi: function( gridApi ) {
				      $scope.grid1Api = gridApi;
			    }
		    };
    
    
    $scope.gridOptions2.table = {
    		enableSorting: false,
    		enableVerticalScrollbar:0,
    		columnDefs: [
                   	      { field: 'items',displayName:'ITEMS', enableColumnMenu: false },
                	      { field: 'org',displayName:'ORG', enableColumnMenu: false },
                	      { field: 'avgss',displayName:'AVG SS', enableSorting: false , enableColumnMenu: false  },
                	      { field: 'sdr',displayName:'SS/DDLT RATIO', enableColumnMenu: false}
                	      ],	
    		data:[ {
					"items" : "800-30208-06",
					"org" : "FOC",
					"avgss" : "23.56",
					"sdr" : "0.37"
				}, {
					"items" : "800-30208-06",
					"org" : "FTX",
					"avgss" : "198.76",
					"sdr" : "0.23"
				}],
			    onRegisterApi: function( gridApi ) {
				      $scope.grid1Api = gridApi;
			    }
		    };
    			
    			
    
   
    
    $scope.toggleGridFullPage = function(item){
    	
    	if($scope[item]){
			$scope.expandTBSStyle = {display:"none"};
		    $scope.expandTBEStyle = {display:"none"};
		    $scope.expandMASStyle = {display:"none"};
		    
		    $scope[item+"Style"] = {width:"96%"};
		} else {
			$scope.expandTBSStyle = {};
		    $scope.expandTBEStyle = {};
		    $scope.expandMASStyle = {};
		}
    	$scope[item] = !$scope[item];
    	 
    	
    }
    
    $scope.gridOptions3.table = {
    		enableSorting: false,
    	    enableVerticalScrollbar:0,
    		columnDefs: [
                   	      { field: 'items',displayName:'ITEMS', enableColumnMenu: false,width:"15%" },
                	      { field: 'org',displayName:'ORG', enableColumnMenu: false ,width:"15%" },
                	      { field: 'pavgss',displayName:'Previous AVG SS', enableSorting: false , enableColumnMenu: false,width:"20%"  },
                	      { field: 'avgss',displayName:'AVG SS' , enableColumnMenu: false,width:"15%"  },
                	      { field: 'sdr',displayName:'SS/DDLT RATIO', enableColumnMenu: false ,width:"20%" },
                	      { field: 'pchange',displayName:'% Change', enableSorting: true, enableColumnMenu: false ,width:"15%" }
                	      ],	
    		data:[ {
				"items" : "800-30322-02",
				"org" : "FCZ",
				"pavgss" : "0",
				"avgss" : "0",
				"sdr" : "0",
				"pchange" : "0%"
			}, {
				"items" : "800-30322-02",
				"org" : "FTX",
				"pavgss" : "0",
				"avgss" : "0",
				"sdr" : "0",
				"pchange" : "0%"
			}, {
				"items" : "800-30208-06",
				"org" : "FCZ",
				"pavgss" : "1",
				"avgss" : "1.65",
				"sdr" : "0.02",
				"pchange" : "65%"
			}],
			    onRegisterApi: function( gridApi ) {
				      $scope.grid1Api = gridApi;
			    }
		    };
});
