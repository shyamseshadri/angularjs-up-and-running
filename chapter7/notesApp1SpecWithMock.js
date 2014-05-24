// File: chapter7/notesApp1SpecWithMock.js

describe('ItemCtrl With global mock', function() {

  var ctrl;
  beforeEach(module('notesApp1'));
  beforeEach(module('notesApp1Mocks'));

  beforeEach(inject(function($controller) {
    ctrl = $controller('ItemCtrl');
  }));

  it('should load mocked out items', function() {
    expect(ctrl.items).toEqual([{id: 1, label: 'Mock'}]);
  });

});
