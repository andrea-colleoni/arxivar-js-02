'use strict';

// Declare app level module which depends on views, and core components
var app = angular.module('corsoJS', [
  'phoneList'
]);

app.component('greetUser', {
  template: '<p>Il messaggio dal controller è: {{message}}</p>',
  controller: function GreetUserController($scope) {
    $scope.message = 'Ciao!';
  }
});