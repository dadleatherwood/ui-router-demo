angular.module('routing2App').service('skillsService', function() {

  this.getSkills = function() {
    return skills;
  }

  this.addSkill = function(skill) {
    skills.push(skill)
  }


})

var skills = [
   {id: 0, name: 'Ninjitsu', level: 'beginner'},
   {id: 1, name: 'Gardening', level: 'pre-beginner'},
   {id: 2, name: 'Laundry', level: 'advanced'},
   {id: 3, name: 'Making fun of Shea', level: 'expert'},
]
