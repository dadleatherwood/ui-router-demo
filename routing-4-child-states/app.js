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
      .state('parent.child1', {
         url: '/child1',
         templateUrl: 'views/child1.html',
      })
      .state('parent.child2', {
         url: '/child2',
         templateUrl: 'views/child2.html',
      })
})