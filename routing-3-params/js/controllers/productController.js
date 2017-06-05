angular.module('routing3App').controller('productController', function($scope, $state, $stateParams, productService) {
   $scope.product = productService.getProductById(parseInt($stateParams.id))
   console.log($scope.product)

   $scope.addProductToCart = function(id) {
      productService.addProductToCart(id)
      $state.go('cart')
   }
})