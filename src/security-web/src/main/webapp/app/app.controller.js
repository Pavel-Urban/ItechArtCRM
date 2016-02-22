/**
 * @author yauheni.putsykovich
 */
angular.module("app").controller("AppController", ["AuthService", "$location",
    function (AuthService, $location) {
        "use strict";

        var vm = this;

        console.log("AppController");

        vm.isActive = function (path) {
            return $location.path().substr(0, path.length) === path ? "active" : "";
        };

        vm.isLoggedUser = function () {
            return AuthService.isAuthenticated();
        };

        vm.getUserName = function () {
            var auth = AuthService.getAuthentication();
            return auth ? auth.username : null;
        };

        vm.logout = function () {
            AuthService.logout();
            $location.path("/login");
        };

    }]);