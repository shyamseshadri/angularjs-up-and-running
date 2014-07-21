// File: chapter13/directive-compile/directive.js
angular.module('dynamicFormApp')
  .directive('formElement', [function() {

    return {
      restrict: 'E',
      require: '^form',
      scope: true,
      compile: function($element, $attrs) {
        var expectedInputAttrs = {
          'required': 'required',
          'ng-minlength': 'ngMinlength',
          'ng-pattern': 'ngPattern'
          // More here to be implemented
        };

        // Start extracting content from the HTML
        var validationKeys = $element.find('validation');
        var presentValidationKeys = {};
        var inputName = $attrs.name;
        angular.forEach(validationKeys, function(validationKey) {
          validationKey = angular.element(validationKey);
          presentValidationKeys[validationKey.attr('key')] =
            validationKey.text();
        });

        // Start generating final element HTML
        var elementHtml = '<div>' +
          '<label>' + $attrs.label + '</label>';
        elementHtml += '<input type="' + $attrs.type +
                            '" name="' + inputName +
                            '" ng-model="' + $attrs.bindTo + '"';

        $element.removeAttr('type');
        $element.removeAttr('name');
        for (var i in expectedInputAttrs) {
          if ($attrs[expectedInputAttrs[i]] !== undefined) {
            elementHtml += ' ' + i + '="' +
                $attrs[expectedInputAttrs[i]] + '"';
          }
          $element.removeAttr(i);
        }
        elementHtml += '>';

        elementHtml +=
            '<span ng-repeat="(key, text) in validators" ' +
                 ' ng-show="hasError(key)"' +
                 ' ng-bind="text"></span>';

        elementHtml += '</div>';
        $element.html(elementHtml);

        return function($scope, $element, $attrs, formCtrl) {
          $scope.validators = angular.copy(presentValidationKeys);
          $scope.hasError = function(key) {
            return !!formCtrl[inputName]['$error'][key];
          };
        };
      }
    };
  }]);
