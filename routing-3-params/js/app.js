angular.module('routing3App', ['ui.router'])

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
})