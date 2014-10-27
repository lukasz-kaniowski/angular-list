'use strict';

/**
 * @ngdoc function
 * @name angularListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularListApp
 */
angular.module('angularListApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
