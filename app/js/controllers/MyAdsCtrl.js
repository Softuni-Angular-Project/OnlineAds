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

    $scope.deactivate = function deactivate(id) {
        userService.deactivateAd(id,
            function success(data) {
                notifyService.showInfo('Add status deactivate');
                $scope.reloadAds();
            },
            function (error) {
                notifyService.showError('Could not deactivate ad', error)
            })
    };

    $scope.delete = function (id) {
        userService.deleteAd(id,
            function success(data) {
                notifyService.showInfo('Add deleted successfully');
                $scope.reloadAds();
            },
            function (error) {
                notifyService.showError('Could not delete ad', error)
            })
    };

    $scope.reloadAds();

}]);