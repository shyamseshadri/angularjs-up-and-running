// File: chapter13/directive-slider/noui-slider.js
angular.module('sliderApp')
  .directive('noUiSlider', [function() {
    return {
      restrict: 'E',
      require: 'ngModel',
      link: function($scope, $element, $attr, ngModelCtrl) {

        $element.noUiSlider({
          // We might not have the initial value in ngModelCtrl yet
          start: 0,
          range: {
            // $attrs by default gives us string values
            // nouiSlider expects numbers, so convert
            min: Number($attr.rangeMin),
            max: Number($attr.rangeMax)
          }
        });

        // When data changes inside AngularJS
        // Notify the third party directive of the change
        ngModelCtrl.$render = function() {
          $element.val(ngModelCtrl.$viewValue);
        };

        // When data changes outside of AngularJS
        $element.on('set', function(args) {
          // Also tell AngularJS that it needs to update the UI
          $scope.$apply(function() {
            // Set the data within AngularJS
            ngModelCtrl.$setViewValue($element.val());
          });
        });
      }
    };
  }]);
