angular.module('routing3App').controller('shopController', function($scope, $state, productService) {
   $scope.products = productService.getProducts()
   console.log($scope.products)

   $scope.viewProduct = function(id) {
      $state.go('product', {id: id})
   }
})