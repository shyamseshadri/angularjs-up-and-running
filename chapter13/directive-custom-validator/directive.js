// File: chapter13/directive-custom-validator/directive.js
angular.module('stockMarketApp')
  .directive('validZip', [function() {
    var zipCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/g;
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function($scope, $element, $attrs, ngModelCtrl) {
        // Handle DOM update --> Model update
        ngModelCtrl.$parsers.unshift(function(value) {
          var valid = zipCodeRegex.test(value);
          ngModelCtrl.$setValidity('validZip', valid);
          return valid ? value : undefined;
        });

        // Handle Model Update --> DOM
        ngModelCtrl.$formatters.unshift(function(value) {
          ngModelCtrl.$setValidity('validZip',
            zipCodeRegex.test(value));
          return value;
        });
      }
    };
  }]);
