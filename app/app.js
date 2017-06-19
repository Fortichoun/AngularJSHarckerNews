angular
  .module('covargoApp', ['ui.router'])
  .constant('HOST_CONFIG', {
    url: 'localhost',
  })
  .config(($locationProvider, $stateProvider) => {
    // UI-Router, defines the routes
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
      })
      .state('create', {
        url: '/create',
        templateUrl: 'templates/createForm.html',
      })
      .state('home.show', {
        url: '/home/{articleId}',
        templateUrl: 'templates/home/articleDetails.html',
      });


    $locationProvider.html5Mode(true).hashPrefix('');
  });

