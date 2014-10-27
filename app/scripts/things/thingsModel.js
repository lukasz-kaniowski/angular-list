'use strict';

/**
 * @ngdoc function
 * @name angularListApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularListApp
 */
angular.module('angularListApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
