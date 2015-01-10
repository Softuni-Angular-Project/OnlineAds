app.controller('RegisterCtrl', ['$scope', '$location','townsData', 'userData', function ($scope, $location, townsData, userData) {
    townsData.getTowns()
        .$promise
        .then(function (data) {
            $scope.towns = data;
        });

    $scope.register = function (user) {
        userData.register(user);
        $location.path("/");
    }
}]);