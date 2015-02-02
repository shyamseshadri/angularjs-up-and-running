// File: chapter7/notesApp1ServiceSpec.js

describe('ItemCtrl with inline mock', function() {
  beforeEach(module('notesApp1'));

  var service;

  beforeEach(inject(function(ItemService) {
    service = ItemService;
  }));

  it('should return default items', function() {
    expect(service.list()).toEqual([
      {id: 1, label: 'Item 0'},
      {id: 2, label: 'Item 1'}
    ]);
  });

  it('should add items', function() {
    var newItem = {id: 3, label: 'New Item'};
    service.add(newItem);
    expect(service.list()).toEqual([
      {id: 1, label: 'Item 0'},
      {id: 2, label: 'Item 1'},
      newItem
    ]);
  });

});
