// File: chapter7/notesApp1SpecWithSpies.js

describe('ItemCtrl with spies', function() {
  beforeEach(module('notesApp1'));

  var ctrl, itemService;

  beforeEach(inject(function($controller, ItemService) {
    spyOn(ItemService, 'list').and.callThrough();
    itemService = ItemService;
    ctrl = $controller('ItemCtrl');
  }));

  it('should load mocked out items', function() {
    expect(itemService.list).toHaveBeenCalled();
    expect(itemService.list.calls.count()).toEqual(1);
    expect(ctrl.items).toEqual([
      {id: 1, label: 'Item 0'},
      {id: 2, label: 'Item 1'}
    ]);
  });
});
