/*global angular*/
angular.module('Instagram', ['ngRoute', 'ngMessages', 'satellizer'])
  .config(function($routeProvider, $authProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/photo/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .otherwise('/');

    $authProvider.loginUrl = 'http://myinstagram-ghansum.c9users.io:8088/auth/login';
    $authProvider.signupUrl = 'http://myinstagram-ghansum.c9users.io:8088/auth/signup';
    $authProvider.oauth2({
      name: 'instagram',
      url: 'http://myinstagram-ghansum.c9users.io:8088/auth/instagram',
      redirectUri: 'https://myinstagram-ghansum.c9users.io:8080/client/index.html',
      clientId: 'eb6bb90cda8a40f087b2073341c112fd',
      requiredUrlParams: ['scope'],
      scope: ['likes'],
      scopeDelimiter: '+',
      authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
    });
  })
  .run(function($rootScope, $window, $auth) {
    if ($auth.isAuthenticated()) {
      $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
    }
  });
