app.controller('CategoriesCtrl', ['$scope', 'categoriesData', 'filter',function($scope, categoriesData, filter) {
    categoriesData.getCategories()
        .$promise
        .then(function (data) {
            $scope.categories = data;
        });

    $scope.categoryClicked = function categoryClicked(category) {
        filter.filterByCategory(category);
    }
}]);
