angular.module('routing4App', ['ui.router'])

.run(function() {
   console.log('App running')
})

.config(function($urlRouterProvider, $stateProvider) {
   $urlRouterProvider.otherwise('/')

   $stateProvider
      .state('home', {
         url: '/',
         templateUrl: 'views/home.html'
      })
      .state('parent', {
         url: '/parent',
         templateUrl: 'views/parent.html',
      })
})