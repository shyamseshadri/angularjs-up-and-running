// File: chapter13/directive-google-chart/pieChart.js
angular.module('googleChartApp')
  .directive('pieChart', ['googleChartLoaderPromise',
      function(googleChartLoaderPromise) {
    var convertToPieChartDataTableFormat =
        function(firstColumnName, secondColumnName, data) {
      var pieChartArray = [[firstColumnName, secondColumnName]];
      for (var i = 0; i < data.length; i++) {
        pieChartArray.push([data[i].label, data[i].value]);
      }
      return google.visualization.arrayToDataTable(
          pieChartArray);
    };

    return {
      restrict: 'A',
      scope: {
        chartData: '=',
        chartConfig: '='
      },
      link: function($scope, $element) {

        googleChartLoaderPromise.then(function() {
          var chart = new google.visualization.PieChart(
            $element[0]);

          $scope.$watch('chartData', function(newVal, oldVal) {
            var config = $scope.chartConfig;
            if (newVal) {
              chart.draw(
                convertToPieChartDataTableFormat(
                  config.firstColumnHeader,
                  config.secondColumnHeader,
                  newVal),
                {title: $scope.chartConfig.title});
            }
          }, true);
        });
      }
    };
  }]);
