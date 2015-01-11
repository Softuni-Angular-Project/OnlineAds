'use strict'

app.controller('MyAdsCtrl', ['$scope', '$rootScope', 'authService', 'userService', 'notifyService' ,function($scope, $rootScope, authService, userService, notifyService) {
    $scope.params = {
        'pageSize' : 10
    };

    $scope.reloadAds = function reloadAds() {
        userService.getUserAds($scope.params,
            function success(data) {
                //console.log(data);
                $scope.myAds = data;
            }),
            function (error) {
                notifyService.showError('Could not load user ads', error)
            }
    };

    $scope.reloadAds();

}]);