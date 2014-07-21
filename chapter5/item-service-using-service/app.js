// File: chapter5/item-service-using-service/app.js

function ItemService() {
  var items = [
    {id: 1, label: 'Item 0'},
    {id: 2, label: 'Item 1'}
  ];
  this.list = function() {
    return items;
  };
  this.add = function(item) {
    items.push(item);
  };
}

angular.module('notesApp', [])
  .controller('MainCtrl', [function() {
    var self = this;
    self.tab = 'first';
    self.open = function(tab) {
      self.tab = tab;
    };
  }])
  .controller('SubCtrl',
      ['ItemService', function(ItemService) {
    var self = this;
    self.list = function() {
      return ItemService.list();
    };

    self.add = function() {
      ItemService.add({
        id: self.list().length + 1,
        label: 'Item ' + self.list().length
      });
    };
  }])
  .service('ItemService', [ItemService]);
