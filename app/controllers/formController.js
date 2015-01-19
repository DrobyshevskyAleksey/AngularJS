angular.module('addressBook')
	.controller('formController', function($scope, $timeout, $state) {
		
		$scope.submit = function(form) {
			$scope.submitted = true;
			if (form.$invalid) {
				return;
			}
			data.push({
				firstname: $scope.firstname,
				lastname: $scope.lastname,
				phone: $scope.phone,
				address: $scope.address,
				notes: $scope.notes
			});
			$state.go('table');
		};
}); 