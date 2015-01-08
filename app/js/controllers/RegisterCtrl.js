app.controller('RegisterCtrl', ['$scope', 'townsData', function ($scope, townsData) {
    townsData.getTowns()
        .$promise
        .then(function (data) {
            $scope.towns = data;
        });

    $scope.register = function (user) {
        userData.register(user);
    }
}]);