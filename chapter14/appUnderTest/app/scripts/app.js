// File: chapter14/appUnderTest/app/scripts/app.js
angular.module('fifaApp', ['ngRoute'])
  .config(function($routeProvider) {

    $routeProvider.when('/', {
      templateUrl: 'views/team_list.html',
      controller: 'TeamListCtrl as teamListCtrl'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
    })
    .when('/team/:code', {
      templateUrl: 'views/team_details.html',
      controller:'TeamDetailsCtrl as teamDetailsCtrl',
      resolve: {
        auth: ['$q', '$location', 'UserService',
          function($q, $location, UserService) {
             return UserService.session().then(
               function(success) {},
               function(err) {
                  $location.path('/login');
                  return $q.reject(err);
             });
        }]
      }
    });
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  });
