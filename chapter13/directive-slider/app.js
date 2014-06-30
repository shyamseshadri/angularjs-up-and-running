// File: chapter13/directive-slider/app.js

angular.module('sliderApp', [])
  .controller('MainCtrl', [function() {
    var self = this;

    self.selectedValue = 2000;

    self.textValue = 4000;

    self.setSelectedValue = function() {
      self.selectedValue = self.textValue;
    };
  }]);
