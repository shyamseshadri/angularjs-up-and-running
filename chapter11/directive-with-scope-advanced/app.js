// File: chapter11/directive-with-scope-advanced/app.js

angular.module('stockMarketApp', [])
  .controller('MainCtrl', [function() {
    var self = this;
    self.stocks = [
      {name: 'First Stock', price: 100, previous: 220},
      {name: 'Second Stock', price: 140, previous: 120},
      {name: 'Third Stock', price: 110, previous: 110},
      {name: 'Fourth Stock', price: 400, previous: 420}
    ];

    self.onStockSelect = function(price, name) {
      console.log('Selected Price ', price, 'Name ', name);
    };
  }]);
