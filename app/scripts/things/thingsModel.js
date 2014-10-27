'use strict';

angular.module('angularListApp')
    .factory('ThingsModel', function () {
        var _items = [];
        return {
            getItems: function () {
                return _items;
            }
        };
    });
