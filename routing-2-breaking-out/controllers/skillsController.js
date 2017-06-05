angular.module('routing2App').controller('skillsController', function($scope, skillsService) {

  $scope.test = 'Skills Test'

  $scope.skills = skillsService.getSkills()

  $scope.addSkill = function(skill) {
    skillsService.addSkill(skill)
    $scope.skills = skillsService.getSkills()
    // $scope.newSkill.name = ""
    // $scope.newSkill.level = ""
    $scope.newSkill = {name: "", level: ""}
  }

})
