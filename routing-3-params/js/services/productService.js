angular.module('routing3App').service('productService', function() {

  this.getProducts = function (){
    return products;
  }

  this.findProductById = function(id) {
    return products.find(function(elem){
      return elem.id === id
    })
  }



})

var products = [
   {
      id: 0,
      name: 'Mac Airbook',
      description: 'The poor man\'s option for dignified computing',
      price: 3000,
      imageUrl: ''
   },
   {
      id: 1,
      name: 'Commodore 64',
      description: 'A nostalgia piece for all of those 35+',
      price: 100,
      imageUrl: ''
   },
   {
      id: 2,
      name: 'HP ProBook',
      description: 'The computer I wasted money on when my IT friends told me that everybody uses PCs right before I decided to come to DevMountain',
      price: 400,
      imageUrl: ''
   },
   {
      id: 3,
      name: 'Toshiba Something Something',
      description: 'The computer for you if you want a fan so tiny that the machine will burn a hole in your pants',
      price: 200,
      imageUrl: ''
   },
   {
      id: 4,
      name: 'Alienware Nerdy Gamer 5000',
      description: 'You\'ll never leave your room again, but you\'ll have lots of "friends" online',
      price: 3000,
      imageUrl: ''
   },
   {
      id: 5,
      name: 'Brother Word Processor',
      description: 'This is the "computer" my sister took when she went to college. Two whole lines of text at a time! This is awesome!',
      price: 140,
      imageUrl: ''
   },
   {
      id: 6,
      name: 'Smith Corona Typewriter',
      description: 'The only computer a real writer ever needs',
      price: 50,
      imageUrl: ''
   },
]
