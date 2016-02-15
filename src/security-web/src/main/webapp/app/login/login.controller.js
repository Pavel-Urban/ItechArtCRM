(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', '$http', 'LoginService'];

    function LoginController($location, $http, LoginService) {
        var vm = this;
        vm.login = function () {
            LoginService.login(vm.username, vm.password).then(
                function (response) {
                    var data = response.data;
                    console.log("data: " + data);
                    $http.defaults.headers.common['X-Auth-Token'] = data.token;
                    $location.path('/users');
                },
                function (error) {
                    console.log(error);
                    vm.error = "Invalid login or password";
                });
        };
    }

})();