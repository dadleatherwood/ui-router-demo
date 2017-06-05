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
         controller: function($scope, character) {
            $scope.character = character
         },
         resolve: {
            character: function(characterService) {
               return characterService.getSwapiCharacter()
            }
         }
      })
      .state('pokemon', {
         url: '/pokemon',
         template: '<h1>Swapi</h1>' +
            '<p>{{character.name}}</p>' +
            '<p ng-repeat="(key, value) in character">{{key}}: {{value}}</p>',
         controller: function($scope, character) {
            $scope.character = character
         },
         resolve: {
            character: function(characterService) {
               return characterService.getPokemonCharacter()
            }
         }
      })

})
.service('characterService', function($http) {
   this.getSwapiCharacter = function() {
      return $http.get('https://swapi.co/api/people/2')
      .then(function(response) {
         return response.data
      })
   }

   this.getPokemonCharacter = function() {
      return $http.get('http://pokeapi.co/api/v2/pokemon/1')
      .then(function(response) {
         return response.data
      })
   }
})