(function () {
	'use strict';

	angular
			.module('crm', [
				'crm.core',
				'crm.user',
				'crm.role',
				'crm.group',
				'crm.contact',
				'crm.contact',
				'crm.navbar',
				'crm.footer']);

	angular
			.module('crm.core', [
				'ngResource',
				'ui.router',
				'ui.bootstrap'
			])

})();
