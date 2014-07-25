// File: chapter7/simpleCtrl2Spec.js

describe('SimpleCtrl2', function() {
  beforeEach(module('simpleCtrl2App'));

  var ctrl, $loc;
  beforeEach(inject(function($controller, $location) {
    ctrl = $controller('SimpleCtrl2');
    $loc = $location;
  }));

  it('should navigate away from the current page', function() {
    expect($loc.path()).toEqual('');
    $loc.path('/here');
    ctrl.navigate1();
    expect($loc.path()).toEqual('/some/where');
  });

  it('should navigate away from the current page', function() {
    expect($loc.path()).toEqual('');
    $loc.path('/there');
    ctrl.navigate2();
    expect($loc.path()).toEqual('/some/where/else');
  });
});
