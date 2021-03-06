'use strict';
var teamManagerAppApp = angular.module('teamManagerAppApp', []);
teamManagerAppApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/team_manager_app/index', {
        templateUrl: '/team_manager_app/views/team_list',
        activeTab: 'Team managerApp',
        controller: 'teamIndexCtrl'
    });
}]).run(['NavBarService', function (NavBarService) {
// Register the main nav item, if any
    NavBarService.register({
        label: 'Teams',
        url: '/team_manager_app/index',
        order: 100,
        showIf: function (CoreCompanyService, CoreUserService) {
            return true;
        }
    });

}]);