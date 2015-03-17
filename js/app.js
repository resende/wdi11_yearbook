var app = angular.module('wdi11Yearbook', ['ngAnimate']);

app.controller('YearbookController', function($scope) {
  $scope.students = students;
  $scope.instructors = instructors;
  $scope.showAllStudents = true;

  $scope.showInstructors = function() {
    $scope.showAllInstructors = true;
    $scope.showAllStudents = false;
  }

  $scope.showStudents = function() {
    $scope.showAllStudents = true;
    $scope.showAllInstructors = false;
  }

  $scope.selectStudent = function(student) {
    $scope.selectedStudent = student;
  }

  $scope.clearSelectedStudent = function() {
    $scope.selectedStudent = false;
  }

  $scope.selectInstructor = function(instructor) {
    console.log('click');
    $scope.selectedInstructor = instructor;
  }

  $scope.clearSelectedInstructor = function() {
    $scope.selectedInstructor = false;
  }
});

students = [
  {
   name: 'James Bennett',
   image: 'assets/avatar.png',
   description: 'got a beard.'
  }, {
   name: 'Mathew Hawley',
   image: 'assets/avatar.png',
   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan felis vitae tristique mollis. Donec tristique nunc nunc, sit amet tempor nibh imperdiet sed. Suspendisse ipsum turpis, feugiat vitae lacus sit amet, facilisis fermentum diam. Fusce ultrices dui eu diam condimentum pharetra. Ut vel interdum tellus, in tempus ante.',
   linkedin: 'https://www.linkedin.com/in/mathewhawley',
   twitter: 'https://twitter.com/mathewhawley',
   github: 'https://github.com/mathewhawley'
  }, {
   name: 'Paul Resende',
   image: 'assets/avatar.png',
   description: 'ideaz man'
  }, {
   name: 'Alex Howard',
   image: 'assets/avatar.png',
   description: 'sass man'
  }, {
   name: 'Tolu Shobande',
   image: 'assets/avatar.png',
   description: 'Lorem ipsum'
  }, {
   name: 'Kudus Dabiri',
   image: 'assets/avatar.png',
   description: 'what a soothing voice'
  }, {
   name: 'Natalie Loh',
   image: 'assets/avatar.png',
   description: 'ask her about her dreams'
  }, {
   name: 'Mary Waltz',
   image: 'assets/avatar.png',
   description: 'Lorem ipsum'
  }, {
   name: 'Oli Cairns',
   image: 'assets/avatar.png',
   description: 'a beautiful mind'
  }, {
   name: 'Ali Skinner',
   image: 'assets/avatar.png',
   description: 'Lorem ipsum dolor sit amet'
  }, {
   name: 'Nathan Miller',
   image: 'assets/avatar.png',
   description: 'networking kind'
  }, {
   name: 'Jack Bush',
   image: 'assets/avatar.png',
   description: 'bit of a genius'
  }, {
   name: 'Lauren Spencer',
   image: 'assets/avatar.png',
   description: 'Lorem ipsum'
  }, {
   name: 'Vinisha Hathiramani',
   image: 'assets/avatar.png',
   description: 'Queen of Random'
  }, {
   name: 'Chris ljoyah',
   image: 'assets/avatar.png',
   description: 'Lorem ipsum dolor'
  }, {
   name: 'Iain Watt',
   image: 'assets/avatar.png',
   description: 'not afraid to ask a question..'
  }, {
   name: 'Colin Durbin',
   image: 'assets/avatar.png',
   description: 'AKA \'Uncle Durbs\''
  }
];

instructors = [
  {
   name: 'Jeremy Marer',
   image: 'assets/avatar.png',
   description: 'Lorem ipsum dolor'
  }, {
   name: 'Mathilda Thompson',
   image: 'assets/avatar.png',
   description: 'gone but not forgotten'
  }, {
   name: 'David Wilkinson',
   image: 'assets/avatar.png',
   description: 'Lorem ipsum dolor sit amet'
  }, {
   name: 'Tobias Hale',
   image: 'assets/avatar.png',
   description: 'Tall.'
  }, {
   name: 'Guy Routledge',
   image: 'assets/avatar.png',
   description: 'Gone but not forgotten #2'
  }
];