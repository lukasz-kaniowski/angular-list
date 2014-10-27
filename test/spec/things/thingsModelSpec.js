'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('angularListApp'));

  var thingsModel;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (ThingsModel) {
    thingsModel = ThingsModel;
  }));

  it('should have empty items list', function () {
    expect(thingsModel.getItems().length).toBe(0);
  });
});
