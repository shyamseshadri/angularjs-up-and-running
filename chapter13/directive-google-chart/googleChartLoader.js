// File: chapter13/directive-google-chart/googleChartLoader.js
angular.module('googleChartApp')
  .factory('googleChartLoaderPromise',
      ['$q', '$rootScope', '$window',
      function($q, $rootScope, $window) {
    // Create a Deferred Object
    var deferred = $q.defer();

    // Load Google Charts API asynchronously
    $window.google.load('visualization', '1',
      {
        packages: ['corechart'],
        callback: function() {
          // Once loaded, trigger the resolve,
          // but inside a $apply as the event happens
          // outside of AngularJS lifecycle
          $rootScope.$apply(function() {
            deferred.resolve();
          });
        }
      });

    // Return the promise object for the directive
    // to chain onto.
    return deferred.promise;
  }]);
