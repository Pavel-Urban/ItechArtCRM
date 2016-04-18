/*globals it, describe, beforeEach, browser, expect, beforeAll, afterAll, require*/
'use strict';

describe('Users under role ADMIN', function () {
	var loginService = require('../../login.service');
	var searchService = require('../../search.service');
	var credentials = require('../../credentials');
	var rolesPO = require('../../pages/roles.po');
	var rolesFormPO = require('../../pages/role.form.po');
	var navbarPO = require('../../pages/navbar.po');

	var ROLE_NAME = 'TestRole61';
	var ROLE_DESCRIPTION = 'zzzzzzzzzzzz';

	beforeAll(function () {
		loginService.login(credentials.admin);
	});

	it('should go to roles list', function () {
		navbarPO.rolesLink.click();
	});

	it('should be able to create the role', function () {
		rolesPO.addButton.click();
		rolesFormPO.getName().sendKeys(ROLE_NAME);
		rolesFormPO.getDescription().sendKeys(ROLE_DESCRIPTION);
		rolesFormPO.submitButton.click();
	});

	it('should be able to find role on page', function () {
		searchService.search(rolesPO, ROLE_NAME, by.binding('role.name')).then(checkRole);
	});


	afterAll(function () {
		deleteRole();
		loginService.logout();
	});

	function checkRole(roles) {
		roles.element(by.css('span[ng-click="vm.edit(role)"]')).click();
		expect(rolesFormPO.getName().getAttribute('value')).toBe(ROLE_NAME);
		expect(rolesFormPO.getDescription().getAttribute('value')).toBe(ROLE_DESCRIPTION);
		rolesFormPO.submitButton.click();
	}

	function deleteRole() {
		navbarPO.rolesLink.click();
		searchService.search(rolesPO, ROLE_NAME, by.binding('role.name')).then(function (role) {
			role.element(by.model('role.checked')).click();
			rolesPO.deleteButton.click();
		});
	}


});
