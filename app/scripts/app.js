'use strict';

/**
 * @ngdoc overview
 * @name angularListApp
 * @description
 * # angularListApp
 *
 * Main module of the application.
 */
angular
  .module('angularListApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/things.html',
        controller: 'ThingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
