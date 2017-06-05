// Initial App Setup
angular.module('routing2App', ['ui.router'])

.run(function() {
   console.log('App running')
})

// Add config here
.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/')
  $stateProvider

    .state('home', {
      url: '/',
      // template: '<h1>Home</h1>'
      templateUrl: 'views/home.html'
    })

    .state('todo', {
      url: '/todo',
      // template: '<h1>Todo</h1>'
      templateUrl: 'views/todo.html',
      controller: function($scope) {
        $scope.test = "Todo Test"
      }
    })

    .state('hobbies', {
      url: '/hobbies',
      // template: '<h1>Hobbies</h1>'
      templateUrl: 'views/hobbies.html',
      controller: 'hobbiesController'

    })

    .state('skills', {
      url: '/skills',
      // template:  '<h1>Skills</h1>'
      templateUrl: 'views/skills.html',
      controller: 'skillsController'

    })
})
