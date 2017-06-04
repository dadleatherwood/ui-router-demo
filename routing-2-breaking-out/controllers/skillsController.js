angular.module('routing2App').controller('skillsController', function($scope, skillsService) {
   $scope.skills = skillsService.getSkills();
   $scope.addSkill = function(skill) {
      skillsService.addSkill(skill)
      $scope.skills = skillsService.getSkills()
   }
})