define([
	'common-ui/core',
	'common-ui/coreLogger',
	'angular',
	'popup/app',
	'popup/controller'
], function (core, logger, angular) {
	'use strict';

	core.init();
	logger();

	angular.element(document).ready(function () {
		angular.bootstrap(document, ['popup']);
	});
});
