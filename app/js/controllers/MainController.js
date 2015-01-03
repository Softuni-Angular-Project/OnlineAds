softUni.controller('SoftUniController', function ($scope, mainData) {
    mainData.getAllAds(function (resp) {
        $scope.data = resp;
    });
    mainData.getAllTowns(function (resp) {
        $scope.towns = resp;
    });
    mainData.getAllCategories(function (resp) {
        $scope.categories = resp;
    });
});

softUni.controller('UsersController', function($scope, $http) {
    $scope.users = [];
    $scope.totalUsers = 0;
    $scope.usersPerPage = 1; // this should match however many results your API puts on one page
    getResultsPage(1);

    $scope.pagination = {
        current: 1
    };

    $scope.pageChanged = function(newPage) {
        getResultsPage(newPage);
    };

    function getResultsPage(pageNumber) {
        // this is just an example, in reality this stuff should be in a service
        $http.get('path/to/api/users?page=' + pageNumber)
            .then(function(result) {
                $scope.users = result.data.Items;
                $scope.totalUsers = result.data.Count
            });
    }
});