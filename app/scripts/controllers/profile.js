	'use strict';

	angular.module("quickeroo")
	.controller("ProfileCtrl", function($scope, $firebaseObject) {
		//connect to firebase 
		var ref = new Firebase("https://quickeroo.firebaseio.com/");
		var fb = $firebase(ref);

		//sync as object
		var syncObject = fb.$asObject();

		//three way data binding 
		syncObject.$bindTo($scope, 'days');
	});