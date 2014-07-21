// File: chapter12/stockDirectiveRenderSpec.js
describe('Stock Widget Directive Rendering', function() {

  beforeEach(module('stockMarketApp'));

  var compile, mockBackend, rootScope;

  // Step 1
  beforeEach(inject(function($compile, $httpBackend, $rootScope) {
    compile = $compile;
    mockBackend = $httpBackend;
    rootScope = $rootScope;
  }));

  it('should render HTML based on scope correctly', function() {
    // Step 2
    var scope = rootScope.$new();
    scope.myStock = {
      name: 'Best Stock',
      price: 100,
      previous: 200
    };
    scope.title = 'the best';

    // Step 3
    mockBackend.expectGET('stock.html').respond(
      '<div ng-bind="stockTitle"></div>' +
      '<div ng-bind="stockData.price"></div>');

    // Step 4
    var element = compile('<div stock-widget' +
      ' stock-data="myStock"' +
      ' stock-title="This is {{title}}"></div>')(scope);

    // Step 5
    scope.$digest();
    mockBackend.flush();

    // Step 6
    expect(element.html()).toEqual(
      '<div ng-bind="stockTitle" class="ng-binding">' +
        'This is the best' +
      '</div>' +
      '<div ng-bind="stockData.price" class="ng-binding">' +
        '100' +
      '</div>');
  });
});
