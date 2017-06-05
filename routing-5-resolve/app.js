angular.module('routing5App', ['ui.router'])

.run(function() {
   console.log('App running')
})

.config(function($urlRouterProvider, $stateProvider) {
   $urlRouterProvider.otherwise('/')

   $stateProvider
      .state('home', {
         url: '/',
         template: '<h1>Home</h1>',
      })
      .state('swapi', {
         url: '/swapi',
         template: '<h1>Swapi</h1>' +
            '<p>{{character.name}}</p>' +
            '<p ng-repeat="(key, value) in character">{{key}}: {{value}}</p>',
         controller: function($scope) {
            $scope.character = {}
         },
      })
      .state('pokemon', {
         url: '/pokemon',
         template: '<h1>Pokemon</h1>' +
            '<p>{{character.name}}</p>' +
            '<p ng-repeat="(key, value) in character">{{key}}: {{value}}</p>',
         controller: function($scope) {
            $scope.character = {}
         },
      })

})
.service('characterService', function($http) {

})