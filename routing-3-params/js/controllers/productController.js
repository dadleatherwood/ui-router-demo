angular.module('routing3App').controller('productController', function($scope, productService, $stateParams) {

console.log($stateParams)
$scope.product = productService.findProductById(parseInt($stateParams.id))


})
