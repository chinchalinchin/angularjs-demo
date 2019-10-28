var exampleApp = angular.module('exampleApp', []);
const controllers = {
    'ExampleController': ExampleController,
    'DictionaryController': DictionaryController
}
exampleApp.controller(controllers)