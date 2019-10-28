const controllers = {
    'DependencyController': DependencyController,
    'DictionaryController': DictionaryController
}

// ANGULAR APP CONFIGURATION
var exampleApp = angular.module('exampleApp', []);

// CONTROLLER CONFIGURATION
    // basic controllers with no dependencies
exampleApp.controller(controllers)
    // bindercontroller needs access to dom
exampleApp.controller('BinderController', ['$scope', '$document', BinderController])

// ROUTING CONFIGURATION
/*
exampleApp.config(function($routeProvider){
    $routeProvider
        .when('/main',{
            templateUlr: 'example_component/example_main.html'
        })
        .when('/dictionary', {
            controller: 'DictionaryContoller',
            templateUrl: 'example_component/dictionary.html'
        })
        .when('/example_one', {
            controller: 'DependencyController',
            templateUrl: 'example_component/examples/example_one.html'
        })
        .when('/example_two', {
            controller: 'BinderController',
            templateUrl: 'example_component/examples/example_two.html'
        })
        .when('/error', {
            templateUrl: 'example_component/error.html'
        })
        .otherwise({
            redirectTo:'/error'
        })
})
*/