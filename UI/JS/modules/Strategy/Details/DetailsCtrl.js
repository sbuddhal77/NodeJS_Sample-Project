angular.module('detailsCtrl', []).controller('DetailsCtrl', function($scope,SidebarService) {

	$scope.columnDefination = [
			             		{ field: 'org',displayName:'ORG', enableColumnMenu: false , visible:true},
	                   	      	{ field: 'items',displayName:'ITEMS', enableColumnMenu: false,  visible:true },
	                   	      	{ field: 'commodityCode',displayName:'COMMODITY CODE', enableColumnMenu: false,  visible:true },
	                   	      	{ field: 'bu',displayName:'BU', enableColumnMenu: false,  visible:true },
	                   	      	{ field: 'pf',displayName:'PF', enableColumnMenu: false,  visible:true },
	                   	      	{ field: 'mkbytrans',displayName:'MAKE/BUY/TRANSFER', enableColumnMenu: false,  visible:true },
	                   	      	{ field: 'tan',displayName:'TAN/COMPONENT', enableColumnMenu: false,  visible:true },
	                   	      	{ field: 'csl',displayName:'COMPUTED SLs', enableColumnMenu: false,  visible:true },
	                   	      	{ field: 'partners',displayName:'PARTNERS', enableColumnMenu: false,  visible:true },
	                   	      	{ field: 'cost',displayName:'COST', enableColumnMenu: false,  visible:true , enableSorting: true  },
	                   	      	{ field: 'ct2r',displayName:'CT2R WEEKS', enableColumnMenu: false,  visible:true}
	                	      ];
    $scope.detailsGridOption = {
    		enableSorting: false,
    		enableVerticalScrollbar:0,
    		columnDefs: $scope.columnDefination,	
    		data:[ {
					"org" : "FCZ",
					"items" : "800-30208-06",
					"commodityCode" : "Commodity Group returns 'ENCLOSURES' but SmartOps Run returns 'Final Assembly'",
					"bu" : "SAVBU",
					"pf" : "UCSB",
					"mkbytrans" : "Buy",
					"tan" : "TAN",
					"csl" : "0.95",
					"partners" : "Foxconn",
					"cost" : "$27.95",
					"ct2r" : "22.29"
				},{
					"org" : "FCZ",
					"items" : "800-30322-02",
					"commodityCode" : "Commodity Group returns 'ENCLOSURES' but SmartOps Run returns 'Final Assembly'",
					"bu" : "SAVBU",
					"pf" : "UCSB",
					"mkbytrans" : "Buy",
					"tan" : "TAN",
					"csl" : "0.95",
					"partners" : "Foxconn",
					"cost" : "$51.26",
					"ct2r" : "25.29"
				},{
					"org" : "FOC",
					"items" : "800-30208-06",
					"commodityCode" : "Commodity Group returns 'ENCLOSURES' but SmartOps Run returns 'Final Assembly'",
					"bu" : "SAVBU",
					"pf" : "UCSB",
					"mkbytrans" : "Buy",
					"tan" : "TAN",
					"csl" : "0.95",
					"partners" : "Foxconn",
					"cost" : "$27.95",
					"ct2r" : "14.29"
				},{
					"org" : "FTX",
					"items" : "800-30208-06",
					"commodityCode" : "Commodity Group returns 'ENCLOSURES' but SmartOps Run returns 'Final Assembly'",
					"bu" : "SAVBU",
					"pf" : "UCSB",
					"mkbytrans" : "Buy",
					"tan" : "TAN",
					"csl" : "0.95",
					"partners" : "Foxconn",
					"cost" : "$27.95",
					"ct2r" : "20.00"
				},{
					"org" : "FTX",
					"items" : "800-30322-02",
					"commodityCode" : "Commodity Group returns 'ENCLOSURES' but SmartOps Run returns 'Final Assembly'",
					"bu" : "SAVBU",
					"pf" : "UCSB",
					"mkbytrans" : "Buy",
					"tan" : "TAN",
					"csl" : "0.95",
					"partners" : "Foxconn",
					"cost" : "$51.26",
					"ct2r" : "24.57"
				}],
			    onRegisterApi: function( gridApi ) {
				      $scope.detailsGridAPI = gridApi;
			    }
		    };
    
    $scope.toggleGridSelection = function(index){
    	$scope.columnDefination[index].visible = !$scope.columnDefination[index].visible;
    	$scope.detailsGridAPI.core.refresh();
    }
    
   
});
