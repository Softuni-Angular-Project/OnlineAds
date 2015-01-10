app.directive('loggedInSidebar', function () {
    return {
        controller: 'LoggedInSidebarCtrl',
        restrict: 'E',
        templateUrl: 'templates/logged-in-sidebar.html',
        replace: false
    };
});