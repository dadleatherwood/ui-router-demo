angular.module('routing3App').controller('cartController', function($scope, productService) {
   $scope.cart = productService.cart
})