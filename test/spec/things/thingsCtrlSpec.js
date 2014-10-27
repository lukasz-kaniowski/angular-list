'use strict';

describe('Controller: ThingsCtrl', function () {

    // load the controller's module
    beforeEach(module('angularListApp'));

    var ThingsCtrl,
        mockThingsModel,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();

        mockThingsModel = {
            sample: 'mockedObject',
            add: function(){}
        };

        ThingsCtrl = $controller('ThingsCtrl', {
            $scope: scope,
            ThingsModel: mockThingsModel
        });
    }));

    it('should attach thingsModel to the scope', function () {
        expect(scope.thingsModel).toBe(mockThingsModel);
    });

    it('should add new item', function () {
        scope.newItem = 'New Item';
        spyOn(mockThingsModel, 'add');

        scope.add();

        expect(mockThingsModel.add).toHaveBeenCalledWith('New Item');
        expect(scope.newItem).toBe('');
    });
});
