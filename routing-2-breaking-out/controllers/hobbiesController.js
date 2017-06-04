angular.module('routing2App').controller('hobbiesController', function($scope) {
   $scope.soleHobby = "Making fun of Shea"
   $scope.hobbies = [
      "Feeling old",
      "Telling kids to stay off my grass"
   ]

   $scope.addHobby = function(newHobby) {
      $scope.hobbies.push(newHobby)
      $scope.newHobby = ""
   }
})