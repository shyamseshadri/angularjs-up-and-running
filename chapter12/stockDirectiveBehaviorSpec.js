// File: chapter12/stockDirectiveBehaviorSpec.js
describe('Stock Widget Directive Behavior', function() {

  beforeEach(module('stockMarketApp'));

  var compile, mockBackend, rootScope;

  // Step 1
  beforeEach(inject(function($compile, $httpBackend, $rootScope) {
    compile = $compile;
    mockBackend = $httpBackend;
    rootScope = $rootScope;
  }));

  it('should have functions and data on scope correctly',
      function() {
    // Step 2
    var scope = rootScope.$new();
    var scopeClickCalled = '';
    scope.myStock = {
      name: 'Best Stock',
      price: 100,
      previous: 200
    };
    scope.title = 'the best';
    scope.userClick = function(stockPrice,
                               stockPrevious,
                               stockName) {
      scopeClickCalled = stockPrice +
        ';' + stockPrevious +
        ';' + stockName;
    };

    // Step 3
    mockBackend.expectGET('stock.html').respond(
        '<div ng-bind="stockTitle"></div>' +
        '<div ng-bind="stockData.price"></div>');

    // Step 4
    var element = compile(
        '<div stock-widget' +
        ' stock-data="myStock"' +
        ' stock-title="This is {{title}}"' +
        ' when-select="userClick(stockPrice, ' +
            'stockPrevious, stockName)">' +
        '</div>'
    )(scope);

    // Step 5
    scope.$digest();
    mockBackend.flush();

    // Step 6
    var compiledElementScope = element.isolateScope();

    expect(compiledElementScope.stockData)
        .toEqual(scope.myStock);
    expect(compiledElementScope.getChange(
      compiledElementScope.stockData)).toEqual(-50);


    // Step 7
    expect(scopeClickCalled).toEqual('');

    compiledElementScope.onSelect();

    expect(scopeClickCalled).toEqual('100;200;Best Stock');
  });
});
