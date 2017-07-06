angular.module('myApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

    $urlRouterProdider.otherwise('/home');

    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: './views/home.html',
        controller: 'mainCtrl'
    })

});