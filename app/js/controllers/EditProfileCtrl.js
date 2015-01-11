app.controller('EditProfileCtrl', ['$scope', 'townsService', 'userService', '$location','authService', 'notifyService', function($scope, townsService, userService, $location, authService, notifyService) {
    $scope.towns = townsService.getTowns();

    $scope.loadProfile = function () {
        userService.getUserProfile(
            function success(data) {
                //console.log(data);
                $scope.userProfile = data;
            },
            function (error) {
                notifyService.showError(error);
        })
    }

    $scope.editProfile = function editProfile(userProfile) {
        userService.editUserProfile($scope.userProfile,
            function success(data) {
                notifyService.showInfo('User profile updated')
                $location.path('/user/ads');
            }),
            function (error) {
                notifyService.showError('Could not change user profile', error)
            }
    };

    $scope.changePassword = function changePassword(passwords) {
        userService.changeUserPassword($scope.passwords,
            function success(data) {
                notifyService.showInfo('User passwords updated')
                $location.path('/user/ads');
            }),
            function (error) {
                notifyService.showError('Could not change user passwords', error)
            }
    };

    $scope.loadProfile();
}]);
