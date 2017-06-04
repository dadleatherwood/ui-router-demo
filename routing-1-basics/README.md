# Simple Routing

## 1. Setup
### 1.0 Files
To set up the app, we'll need an index.html and an app.js file. For a full application, we should create files for the controllers and services, but for this simple app, we'll put everything in app.js so you can see it all together. Then we'll break everything out. 

### 1.1 Scripts
We need three script tags: 

```
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.3/angular-ui-router.js"></script>
<script src="app.js"></script>
```

## 1.2 App.js

Create the angular application in app.js, and include the `ui.router` module.
Don't forget the quotation marks around ui.router, and don't forget the period.

```
angular.module('routingApp', ['ui.router'])
```

### 1.3 Bootstrap the App

In index.html, add the ng-app directive: 

```
<div ng-app="routingApp">


</div>
```

### 1.4 Testing

Before we get too far into the app, it's a good idea to test the app. We normally test with data in our controllers, but we can use the .run method on the app itself to test. We simply chain the .

## 2. States
UI-Router uses states to provide routes to the application. Each state can contain a view, as well as a controller to manipulate its data. 

### 2.1 Config
In app.js, we'll add a .config method to the angular module. We'll pass a callback function to this method. 

(N.B. Like the .run method, this method does not take a name argument like a controller or service. We do not need to name these methods because there will be only one instance of each, whereas we want multiple controllers or services.)

```
httml
```

### 2.2 $urlRouterProvider
We use this dependency (a class from ui.router) to catch all routes which we don't define. Incidentally, it also serves up our home view without us having to type in the actual url ('#!/').

### 2.3 $stateProvider
This dependency actually configures our states. The states are the routes of our application. They have several properties--names, urls, templates (for the html), and controllers (plus more). 

Configure a state or two for your test application. 

### 2.4 UI-View
When you have at least states configured, you want the states to show up on your index.html. To display the view of each state, we need a viewport. In your index.html, place a `<ui-view></ui-view>` tag. This is a special element provided to us by the ui.router library. You can place the ui-view anywhere in the body. If you would like a nav and footer to show up on every route, then place the ui-view between those two elements. If you want the view to change completely with each route, then the ui-view might be the only element in your body. 

Once you have the ui-view tag, make sure the routes render. You'll have to type the routes in manually in the address bar, as in the following example: 

```
file:///Users/username/devmountain/routing/routing-1-basics/index.html#!/ + state_name
```

## 3. Navigation
You probably don't want your user typing routes in the address bar, so we have two other ways to navigate. The easiest is to place a `ui-sref` attribute on an anchor tag, as in the following example: 

```
<a ui-sref="state_name">Click Here to Navigate to a Different State</a>
```

The other option is to navigate from your controller, using the $state library and the .go() method, as in this example:

```
angular.module("someApp").controller("someController", function($state) {
   $state.go("state_name")
})
```

### 3.1 Navbar
Create a navbar in your index.html with links to your states. 

```
         <nav>
            <ul>
               <li>
                  <a ui-sref="home">Home</a>
               </li>
               <li>
                  <a ui-sref="about">About</a>
               </li>
            </ul>
         </nav>

```

Optional: If you'd like to add a class to highlight the link to the route the user is on, add the `ui-sref-active="active"` attribute to the anchor tag:

```
         <nav>
            <ul>
               <li>
                  <a ui-sref="home" ui-sref-active="active">Home</a>
               </li>
               <li>
                  <a ui-sref="about" ui-sref-active="active">About</a>
               </li>
            </ul>
         </nav>
```

### 3.2 $state.go()
I won't go into too much depth here, but essentially the $state.go method is a way to navigate programmatically. In other words, you wait for the user to do something, and you redirect them to a different state depending on their response. Think about a user logging in. The user logs in; you check the login credentials; if the login is valid, you redirect to a home view. If invalid, you keep them on the login page. 

First, we need a controller on a view. To do that, we'll need to add a state on app.js: 

```
      .state('redirect', {
         url: '/redirect',
         template: '<h2>You\'ll see this message for about a second</h2>',
      })
```

Then, we'll need to add a controller to this state so that we can inject $state and use the .go method. 

```
      .state('redirect', {
         url: '/redirect',
         template: '<h2>You\'ll see this message for about a second</h2>',         controller: function() {
            // Do logic here. You can inject $scope and manipulate the view, etc.
         }
      })
```

If this looks weird, just remember that controllers are essentially functions that you name. Here we're just using an anonymous function. 

Now inject $state and navigate to a different state. I'll use a setTimeout so that you can see the redirect state for a second before it navigates back to home:

```
      .state('redirect', {
         url: '/redirect',
         template: '<h2>You\'ll see this message for about a second</h2>',         controller: function($state) {
            setTimeout(function() {
               $state.go("home")
            }, 1000)
         }
      })
```

Finally, add a new link in your navbar to the redirect state: 

```
         <nav>
            <ul>
               <li>
                  <a ui-sref="home">Home</a>
               </li>
               <li>
                  <a ui-sref="about">About</a>
               </li>
                  <li>
                  <a ui-sref="redirect">Redirect</a>
               </li>
            </ul>
         </nav>
```

## Conclusion
That's it for the basics! Now you can build a fully functional Single-Page Application, or SPA. Remember the key steps:

1. Inject 'ui.router' in the angular app declaration in app.js.
2. Include the script tage for ui-router in your index.html.
3. Configure your states in the .config method in app.js
4. Include ui-sref attributes on the anchor tags of your navbar. 
5. Inject the $state library to conduct any programmatic navigation in your controllers.

Our app isn't very exciting, I know, but I hope you can see the possibilities available to you now. 

Let's move on to building something cooler. 


