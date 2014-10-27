'use strict';

angular.module('angularListApp')
    .controller('ThingsCtrl', function ($scope, ThingsModel) {
        $scope.thingsModel = ThingsModel;
    });
