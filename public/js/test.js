// (function(){
//
//     var usersUrl = "http://localhost:2403/users";
//     var configuration = function($locationProvider, $routeProvider){
//         $locationProvider.html5Mode(true);
//
//         $routeProvider.when('/', {
//             templateUrl : 'auth/auth.html'
//         });
//
//         $routeProvider.when("/page", {
//             templateUrl: "page/page.html"
//         });
//     };
//
//     //Run function we can use after executing all modules
//     var run = function(){};
//
//
//     angular.module('myApp', ['myApp.auth', 'ngComboDatePicker', 'ngResource', 'ngRoute'])
//         .constant('usersUrl', usersUrl)
//         .config(configuration)
//         .run([run]);
// })();

