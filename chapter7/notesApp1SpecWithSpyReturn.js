// File: chapter7/notesApp1SpecWithSpyReturn.js

describe('ItemCtrl with SpyReturn', function() {
  beforeEach(module('notesApp1'));

  var ctrl, itemService;

  beforeEach(inject(function($controller, ItemService) {

    spyOn(ItemService, 'list')
        // According to latest version of jasmine docs, andReturn() method has updated to and.returnValue() method
        // http://jasmine.github.io/2.0/introduction.html#section-Spies:_<code>and.returnValue</code>
        //.and.returnValue([{id: 1, label: 'Mock'}]);
        .andReturn([{id: 1, label: 'Mock'}]);
    itemService = ItemService;
    ctrl = $controller('ItemCtrl');
  }));

  it('should load mocked out items', function() {
    expect(itemService.list).toHaveBeenCalled();
    // According to latest version of jasmine docs, callCount property has updated to calls.count() method
    // http://jasmine.github.io/2.0/introduction.html#section-24
    // expect(itemService.list.calls.count()).toEqual(1);
    expect(itemService.list.callCount).toEqual(1);
    expect(ctrl.items).toEqual([{id: 1, label: 'Mock'}]);
  });
});
