(function () {
	'use strict';

	angular
			.module('securityManagement')
			.factory('httpInterceptor', httpInterceptor);

	/** @ngInject */
	function httpInterceptor($q, $log, $injector, toastr) {
		function catchError(response) {
			switch (response.status) {
				case 401: {
					catchAuthError();
					break;
				}
				default: {
					catchDefaultError(response);
				}

			}
			return $q.reject(response);
		}

		function catchAuthError() {
			var AuthService = $injector.get('authService');
			if (AuthService.isAuthenticated()) {
				AuthService.logout();
			}
			$injector.get('$state').transitionTo('login');
			toastr.error('Your credentials are gone', 'Error');
		}

		function catchDefaultError(response) {
			$log.error(response.status + ':' + response.data.type + ' ' + response.data.message);
			toastr.error('Something goes wrong', 'Error');
		}

		return {
			responseError: catchError
		}
	}

})();
