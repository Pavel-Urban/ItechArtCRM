/**
 * @author yauheni.putsykovich
 */
(function () {
	'use strict';
	angular
			.module('securityManagement')
			.factory('roleService', roleService);

	/** @ngInject */
	function roleService($http) {

		function fetchAll() {
			return $http.get('rest/roles');
		}

		function create(role) {
			return $http.post('rest/roles', role);
		}

		function get(id) {
			return $http.get('rest/roles/' + id);
		}

		function update(role) {
			return $http.put('rest/roles', role);
		}

		function remove(id) {
			return $http.delete('rest/roles/' + id);
		}

		return {
			fetchAll: fetchAll,
			create: create,
			get: get,
			update: update,
			remove: remove
		};
	}
})();
