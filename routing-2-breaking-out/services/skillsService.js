angular.module('routing2App').service('skillsService', function() {
   this.getSkills = function() {
      return skills;
   }

   this.addSkill = function(skill) {
      skills.push(skill)
   }
})

var skills = [
   {name: 'Ninjitsu', level: 'beginner'},
   {name: 'Gardening', level: 'pre-beginner'},
   {name: 'Laundry', level: 'advanced'},
   {name: 'Making fun of Shea', level: 'expert'},
]