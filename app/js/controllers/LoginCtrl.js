app.controller('LoginCtrl', ['$scope', '$location','userData', function ($scope, $location, userData) {

    $scope.login = function (user) {
        userData.login(user);
        $location.path("/");
    }
}]);
