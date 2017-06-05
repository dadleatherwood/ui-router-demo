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

      .state('shop', {
         url: '/shop',
         templateUrl: 'views/shop.html',
         controller: 'shopController'
      })

      .state('product', {
        url: '/product/:id',
        templateUrl: 'views/product.html',
        controller: 'productController'
      })
})
