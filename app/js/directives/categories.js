app.directive('categories', function () {
    return {
        controller: 'CategoriesCtrl',
        restrict: 'E',
        templateUrl: 'templates/categories.html',
        replace: false
    };
});