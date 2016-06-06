'use strict';

angular.module('mapApp', [
  'ngRoute',
  'mapApp.map',
  'mapApp.services',
  'ngMap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/map'});
}]);
