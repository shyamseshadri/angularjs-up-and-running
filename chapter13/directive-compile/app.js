// File: chapter13/directive-compile/app.js

angular.module('dynamicFormApp', [])
  .controller('MainCtrl', [function() {
    var self = this;
    self.username = '';
    self.password = '';
  }]);
