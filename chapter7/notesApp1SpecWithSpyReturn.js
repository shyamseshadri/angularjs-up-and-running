// File: chapter7/notesApp1SpecWithSpyReturn.js

describe('ItemCtrl with SpyReturn', function() {
  beforeEach(module('notesApp1'));

  var ctrl, itemService;

  beforeEach(inject(function($controller, ItemService) {

    spyOn(ItemService, 'list')
        .and.returnValue([{id: 1, label: 'Mock'}]);
    itemService = ItemService;
    ctrl = $controller('ItemCtrl');
  }));

  it('should load mocked out items', function() {
    expect(itemService.list).toHaveBeenCalled();
    expect(itemService.list.calls.count()).toEqual(1);
    expect(ctrl.items).toEqual([{id: 1, label: 'Mock'}]);
  });
});
