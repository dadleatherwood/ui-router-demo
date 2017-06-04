# Routing 2: Breaking Out
So now you've seen basic routing, but we need to break out our files a bit more if we want to support larger applications. After all, we don't want to write every line of logic in our app.js. 

For this second app, we'll use a file structure which separates files by their function. html files will go with html files, controllers will go with controllers, services with services, etc. 

Take a second to review the file structure
|
|--index.html
|--style.css
|--app.js
|
|--controllers/
|--services/
|--views/

Now we can put all of our files under the appropriate directories. 

Now let's build an app. 

## 1. App

Create the app by performing the following steps:

### Index.html
-- Include Script Tags
-- Bootstrap the App

### App.js
-- Declare the module
-- Tack on a .run method to make sure it's working

## 2. States
### App.js
-- Add a .config method
-- Inject $urlRouterProvider and $stateProvider
-- Call the .otherwise method of $urlRouterProvider
-- Call the .state method of $stateProvider to configure your states
-- Give each state a name, url, template, and controller property.

If you're having trouble remembering the syntax for the .config method, here's an example: 

```
.config(function($urlRouterProvider, $stateProvider) {
   $urlRouterProvider.otherwise('/')
   $stateProvider
      .state('state_name', {
         url: '/',
         template: '<h1>HTML String</h1>',
         controller: function() {

         }
      })
})
```

### Index.html
-- Include the viewport with a `<ui-view></ui-view>` tag.

-- Include navigation with ui-sref attributes on anchor tags.

## 3. Views
### App.js
Replace the template property with a templateUrl property. Rather than writing the html in a string, give the property a string value containing the path to the html file: 

```
      .state('state_name', {
         url: '/',
         templateUrl: 'views/home.html',
         controller: function() {

         }
      })

```
Now add some html in your view_name.html file and see if it renders.

Note: The path to the view file should be relative to the root of the application. Even if we move the app.js file (as we will in some projects), we want to start at the root and then go into the views folder and to the .html file.

## 4. Controllers

### Inline Controller
We can write the logic of our controller in the app.js file on the controller property of a state. First, write a controller function in app.js for a state. Inject $scope into the function, and place a property on the $scope object. It should look something like the following: 

```
      .state('some_state', {
         url: '/some_state',
         templateUrl: 'views/some_state.html',
         controller: function($scope) {
            $scope.someProperty = "Some value"
         }
      })
```

Now render that $scope property on the view for that state. See if it shows up. 

### Separated Controllers
As you can imagine, writing the entire controller for every state in the app.js might make our file a little cluttered. If we wish to break a controller out, we  need to create a controller file, just like the controllers you were creating in earlier apps. 

#### Controller File
```
angular.module('someApp').controller('someController', function($scope) {

})

```
Now copy and paste the logic from your inline controller into the new controller file, or rewrite the one line of code, if you prefer. 

#### App.js
Replace the function on the controller property with the string value of the controller's name. In other words, change the state declaration to something like the following: 

```
      .state('some_state', {
         url: '/some_state',
         templateUrl: 'views/some_state.html',
         controller: 'someStateController'
      })
```

#### Index.html
It won't quite work yet, if you've already checked. To make it work, we need to give Angular access to that controller file. Place another script tag in your index.html file: 

```
   <script src="controllers/someStateController.js"></script>
```

#### Make it more complicated?
Put a hobbies array on your $scope and include an ng-repeat attribute on a li element in the hobbies template. Or add an input and a button with an ng-click on it to add elements to a list. 

## 5. Services
Now let's add a service. First, make a new state called skills. 

Include a name, url, and templateUrl property. Create the template file and make sure it works. 

Now create a service in the services folder. Put a test value on a property of the this object to make sure it works. 

Inject the service in the controller. Assign the test property from the service to a property on $scope, and render the $scope property on the view.

Now you can add functions or data to the service to round out the functionality of your app. 

## 6. Styles
If you want, you can use the style.css file to add styling to the views. 

## Conclusion
Now you have a structure which will support a much larger application. You can assign views and controllers to states, and you can share services between controllers. Just so you know, you should keep the controllers of each view separate. You can share controllers, but it is not advisable.

Now we need to learn a few more things about routing, including how to pass data through the url from view to view. This will allow us to tell where the user has been and what they would like to see on any given view. 