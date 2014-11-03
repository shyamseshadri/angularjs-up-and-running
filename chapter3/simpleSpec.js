// File: chapter3/simpleSpec.js
// A Test Suite in Jasmine
describe('My Function', function() {

  var t;
  // Similar to setup
  beforeEach(function() {
    t = true;
  });

  afterEach(function() {
    t = null;
  });

  it('should perform action 1', function() {
    expect(t).toBeTruthy();
  });
  it('should perform action 2', function() {
    var expectedValue = true;
    expect(t).toEqual(expectedValue);
  });
});
