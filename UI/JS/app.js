// app.js
angular.module('app', [
    'ui.router',
    'appRoutes',
    'ui.select',
    
    'sidebarCtrlBS',
    'sidebarService',
    
    'bufferStrategyCtrl',
    'watchListCtrl',
    'detailsCtrl',
    
    
    'ngFileUpload',
    
    'ui.grid',
    'ui.grid.autoResize',
    /*,
    'ui.grid.selection',
    'ui.grid.edit',
    'ui.grid.pagination',
    'ui.grid.treeView',
    'ui.grid.resizeColumns',
    'ui.grid.exporter',
    'ui.grid.pagination',
    'ui.grid.grouping',
    'ui.grid.pinning',
    'ui.grid.cellNav'*/
]);
