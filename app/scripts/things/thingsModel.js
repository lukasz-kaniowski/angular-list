'use strict';

angular.module('angularListApp')
    .factory('ThingsModel', function () {
        var _items = [];
        return {
            getItems: function () {
                return _items;
            },

            add: function (item) {
                _items.push(item);
            },

            remove: function (item) {
                var index = _items.indexOf(item);
                if (index > -1) {
                    _items.splice(index, 1);
                }
            }
        };
    });
