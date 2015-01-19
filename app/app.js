var addressBook = angular.module('addressBook', ["ui.router"]);
var data = [];

addressBook.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/form");

	$stateProvider
	.state('form', {
		url : "/form",
		templateUrl : 'views/form.html',
	})
	.state('table', {
		url : "/table",
		templateUrl : 'views/table.html'
	});
});