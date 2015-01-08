app.factory('userData', ['$resource', 'baseServiceUrl',function($resource, baseServiceUrl) {

    var resource = $resource();

    function registerUser(user) {

    }

    function loginUser(user) {

    }

    function logoutUser() {

    }

    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }
}]);
