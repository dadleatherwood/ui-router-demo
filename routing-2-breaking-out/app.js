// Create app and chain on a .run and .config
angular.module('routing2App', ['ui.router'])

.run(function() {
   console.log('App running')
})

.config(function($urlRouterProvider, $stateProvider) {
   $urlRouterProvider.otherwise('/')
   $stateProvider
      .state('home', {
         url: '/',
         templateUrl: 'views/home.html',
         controller: function() {
            
         }
      })
      .state('todo', {
         url: '/todo',
         templateUrl: 'views/todo.html',
         controller: function() {

         }
      })
      .state('hobbies', {
         url: '/hobbies',
         templateUrl: 'views/hobbies.html',
         controller: 'hobbiesController'
      })
      .state('skills', {
         url: '/skills',
         templateUrl: 'views/skills.html',
         controller: 'skillsController'
      })
})