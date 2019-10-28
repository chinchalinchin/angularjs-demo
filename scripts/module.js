const controllers = {
    'ExampleController': ExampleController,
    'DictionaryController': DictionaryController
}

var exampleApp = angular.module('exampleApp', []);

// basic controllers with no dependencies
exampleApp.controller(controllers)

// bindercontroller needs access to dom
exampleApp.controller('BinderController', ['$scope', '$document', BinderController])