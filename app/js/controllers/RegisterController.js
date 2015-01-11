'use strict';

// The LoginController is responsible for the "Login" screen
app.controller('RegisterController',
    function ($scope, $location, authService, notifyService, townsService) {
        $scope.towns = townsService.getTowns();

        $scope.register = function(userData) {
            authService.register(userData,
                function success() {
                    notifyService.showInfo("Register successful");
                    $location.path("/");
                },
                function error(error) {
                    notifyService.showError("Registration failed", error);
                }
            );
        };
    }
);