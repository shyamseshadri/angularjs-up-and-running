// File: chapter7/simpleCtrl1.js

angular.module('simpleCtrl1App', [])
  .controller('SimpleCtrl', ['$location', function($location) {
    var self = this;
    self.navigate = function() {
      $location.path('/some/where/else');
    };
  }]);
