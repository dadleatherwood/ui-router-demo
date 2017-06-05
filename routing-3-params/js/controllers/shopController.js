angular.module('routing3App').controller('shopController', function($scope, productService, $state) {

  $scope.products = productService.getProducts()

  $scope.viewProduct = function (productId) {
    $state.go('product',{id: productId})
  }


})
