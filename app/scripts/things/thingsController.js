'use strict';

angular.module('angularListApp')
    .controller('ThingsCtrl', function ($scope, ThingsModel) {
        $scope.thingsModel = ThingsModel;

        $scope.newItem = '';


        $scope.add = function () {
            ThingsModel.add($scope.newItem);
            $scope.newItem = '';
        };
    });
