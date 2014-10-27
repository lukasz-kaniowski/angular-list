'use strict';

describe('Service: ThingsModel', function () {

    // load the controller's module
    beforeEach(module('angularListApp'));

    var thingsModel;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (ThingsModel) {
        thingsModel = ThingsModel;
    }));

    it('should have empty items list at first', function () {
        expect(thingsModel.getItems().length).toBe(0);
    });

    it('should add item to the list', function () {
        thingsModel.add('Item1');

        expect(thingsModel.getItems().length).toBe(1);
        expect(thingsModel.getItems()[0]).toBe('Item1');
    });

    it('should remove item from list', function () {
        thingsModel.add('Item1');
        thingsModel.add('Item2');

        thingsModel.remove('Item1');

        expect(thingsModel.getItems().length).toBe(1);
        expect(thingsModel.getItems()[0]).toBe('Item2');
    });

});
