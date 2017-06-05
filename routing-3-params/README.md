# Parameters and Ecommerce
For this project, we'll practice passing parameters around so that you can keep track of the state of the application. In other words, views can communicate with each other. We'll use ecommerce to illustrate this communication. 

## App Setup
Same old, same old. Declare the app, include the scripts, and bootstrap the app to the html. 

## Configure the states
Configure states for a home view, a shop view (for all products), a product view (with details of one product), and a cart view. 

Remember to include the controller and templateUrl files, as well as to include the links to the controllers in the index.html. 

## A Product Service
We'll need a service to store the products and cart and to make them accessible across views. Create a product service or use mine. 

## Url Parameters
States pass data to each other through url parameters. This means that the data sent goes into the address of the state. So you might see a url like this one:
```
http://some_url/#!/some_state/3
```

That '3' at the end of the address is most likely a parameter, not a fixed state or route. It probably indicates that the person or product or item to be shown on some_state has an id of 3. This allows you to have one route that is capable of showing any individual item, rather than having a route for each individual item.

### Configuring the Parameter
To set up a state to receive a parameter, we need to add it to the .state method in our config: 

```
.state('state_name', {
   url: '/state_name/:parameter_name'

   // And of course the other properties go below

})
```

The colon after the slash indicates that a parameter will be passed. The name following the colon is label given to the parameter. 

Most people will set up the parameter as I have above, but you can also declare it as a property on the state's config object: 

```
.state('state_name', {
   url: '/state_name',
   params: {id: null}
})
```

In this configuration, you have to initialize the parameter with a property and a value. 

## Passing Parameters
To pass the parameters, we can use the $state.go method. In our previous projects, we saw how to pass a state name to $state.go, as in the following: 

```
$state.go('state_name')
```

But we can also pass a second argument, which contains the parameter. This argument must be an object, as in the following:

```
$state.go('state_name', {parameter_name: parameter_value})
```

We can also use the ui-sref to pass parameters, as in the following example: 

```
ui-sref="state_name({parameter_name: parameter_value})"
```

This second method is easier, but it feels weird to me for some reason. Your choice, though. 


## Accessing Parameters
In addition to the $state library, ui-router also give us the $stateParams library so that we can access parameters. To see the parameters passed to a state, inject $stateParams to the controller for that state. Then console.log the $stateParams object:

```
angular.module('app').controller('controller', function($stateParams) {
   console.log($stateParams)
})
```

Note that because the parameters are passed in a url, which is a string, number parameters will be converted to strings. You will have to parse them back into integers or real numbers if you need to use them as numbers. 

## Implementing the Store
I'm running out of time, so ask me for help if we don't get to this during lecture and you still want to build the store. 

Essentially, we need the following to make our store work: 

### Product Service
In the product service, we'll need a method to getProducts and to getProductById. We'll also need an empty cart and a method to addProductToCart. 

### Shop
In the shop controller, we need to get the products from the product service. Then we need to display those products on the view using an ng-repeat.

On each product, we need an ng-click or a ui-sref that will allow us to navigate to the product view and pass that product id as a parameter. 

### Product
In the product controller, we'll need to see what id was passed as a parameter, and we'll need to call the getProductById method in the product service. Remember that the id will be a string after it's passed. 

Then we'll need to display that product on the view.

After that, we'll need an addProductToCart function that will call the product service's addProdcutToCart function and also redirect us to the cart view.

### Cart
One last step. Finally, we need to retrieve the cart from the product service in the cart controller. Then we'll display that cart on the view. 

If you want to add more, you might add a remove item from cart function. 
