// File: chapter7/notesApp1-mocks.js

angular.module('notesApp1Mocks', [])
  .factory('ItemService', [function() {
    return {
      list: function() {
        return [{id: 1, label: 'Mock'}];
      }
    };
  }]);
