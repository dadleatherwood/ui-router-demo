// 1.2 Module declaration

angular.module('routingApp', ['ui.router'])

// 1.4 Testing with .run
// The optional .run method is a good way to test whether or not your app is running.
// Uncomment the method and check your console.

.run(function() {
   console.log('App working')
})

// 2.1 Creating the config

.config(function($stateProvider, $urlRouterProvider) {

   // 2.2 $urlRouterProvider
   // This service allows us to set up the initial route and catch mistyped routes.
   $urlRouterProvider
      .otherwise('/')

   // 2.3 $stateProvider
   // This service allows us to configure the states of the application.
   $stateProvider
      // For each state, we chain a .state method to $stateProvider

      // First name the route and then pass a config object
      .state('home', {
         // Give the route a url
         url: '/',
         // Give the route some html
         template: '<h2>Home</h2>'
      })


      .state('about', {
         url: '/about',
         template: '<h2>About</h2>'
      })

// Add any other states you'd like

      .state('shea', {
        url: '/shea',
        template: '<h2>Shea is the best</h2>'
      })





      // 3.2 $state.go
      .state('redirect', {
         url: '/redirect',
         template: '<h2>You\'ll see this message for about a second</h2>',
         controller: function($state) {
            setTimeout(function() {
               $state.go("home")
            }, 1000)
         }
      })
})
