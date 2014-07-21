// File: chapter13/directive-advanced-transclusion/directive.js
angular.module('stockMarketApp').directive('simpleStockRepeat',
    [function() {
  return {
    restrict: 'A',
    // Capture and replace the entire element
    // instead of just its content
    transclude: 'element',
    // A $transclude is passed in as the fifth
    // argument to the link function
    link: function($scope, $element, $attrs, ctrl, $transclude) {
      var myArray = $scope.$eval($attrs.simpleStockRepeat);

      var container = angular.element(
        '<div class="container"></div>');
      for (var i = 0; i < myArray.length; i++) {
        // Create an element instance with a new child
        // scope using the clone linking function
        var instance = $transclude($scope.$new(),
            function(clonedElement, newScope) {
          // Expose custom variables for the instance
          newScope.currentIndex = i;
          newScope.stock = myArray[i];
        });
        // Add it to our container
        container.append(instance);
      }

      // With transclude: 'element', the element gets replaced
      // with a comment. Add our generated content
      // after the comment
      $element.after(container);
    }
  };
  }]);
