/**
 * @author yauheni.putsykovich
 */
angular.module("app").factory("GroupService", ["$http", "$q", "Handler", function ($http, $q, Handler) {
    "use strict";
    this.fetchAll = function fetchAll() {
        var deferred = $q.defer();
        $http.get("/rest/group").then(deferred.resolve, deferred.reject);
        deferred.promise.catch(Handler.handleError("Error during fetching groups"));
        return deferred.promise;
    };

    this.create = function (group, successHandler) {
        $http.post("/rest/group", group).then(successHandler, Handler.handleError("Creating of group fails"));
    };

    this.update = function (group, successHandler) {
        $http.put("/rest/group", group).then(successHandler, Handler.handleError("Update group failed"));
    };

    return this;
}]);
