// File: chapter14/appUnderTest/app/scripts/controllers.js
angular.module('fifaApp')
  .controller('MainCtrl', ['UserService',
    function(UserService) {
      var self = this;
      self.userService = UserService;

      // User Service will automatically update isLoggedIn
      // after this call finishes
      UserService.session();
  }])

  .controller('TeamListCtrl', ['FifaService',
    function(FifaService) {
      var self = this;
      self.teams = [];

      FifaService.getTeams().then(function(resp) {
        self.teams = resp.data;
      });
  }])

  .controller('LoginCtrl', ['UserService', '$location',
    function(UserService, $location) {
      var self = this;
      self.user = {username: '', password: ''};

      self.login = function() {
        UserService.login(self.user).then(function(success) {
          $location.path('/team');
        }, function(error) {
          console.error('Unable to login');
        })
      };
  }])

  .controller('TeamDetailsCtrl', ['$location', '$routeParams', 'FifaService',
    function($location, $routeParams, FifaService) {
      var self = this;
      self.team = {};
      FifaService.getTeamDetails($routeParams.code).then(function(resp){
        self.team = resp.data;
      }, function(error){
        $location.path('/login');
      });
    }]);
