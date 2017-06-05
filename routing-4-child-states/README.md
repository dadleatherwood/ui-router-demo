# Child States / Nested Views
We don't have a lot of time to cover this, so I'm just going to show you how it works. Please feel free to play around with this on your own.

## Nesting views
You have one viewport on your index.html. You can also place a nested viewport (another `<ui-view></ui-view>`) inside the template of a view. This will allow for the html inside of that inner viewport to change with navigation. This is what is known as a nested view or a child view.

## Configuring the view
In your app.js, you need to declare a state as a child, either by including the parent property on .state, or by using dot notation in the state name, as in the following: 

```
.state('parent', {
   url: '/parent',
})
.state('parent.child', {
   url: '/child',
})
```

This notation tells Angular that the second state is a child of the first. 

## Inserting the ui-view
Then you simply place the ui-view in the template of the parent: 

```
.state('parent', {
   url: '/parent',
   template: '<h1>Parent</h1>' +
      '<h2>Some general info</h2>' +
      '<h3>Here's the child: </h3>' + 
      '<ui-view></ui-view>',
})
```

That's it! See the example for a demonstration. 
