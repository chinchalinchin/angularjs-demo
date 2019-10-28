// AngularJS Controllers

function DependencyController($scope){
    // Fields
    $scope.mantra = [
        {coding: "javascript", fun: "beach ball"},
        {coding: "typescript", fun: "skateboard"},
        {coding: "angular 2", fun: "poodles"},
        {coding: "angularjs", fun: "ice fishing"}
    ]
    
}

function BinderController($scope, $document){
    // Fields
    $scope.bindinglist = []
    // Functions
    $scope.pushOnClick = function(event, entry){
        // only add if enter key is pressed
        if(event.keyCode === 13){
            $scope.bindinglist.push(entry);
            $document[0].querySelector('#binder').value = ""
        }
    }
}

function DictionaryController($scope){
    // Fields 
    $scope.terms = [
        {name: 'Data Binding', desc: 'A data binding is a way of dynamically updating elements based on changes made \
                                        to the Model through the View'},
        {name: 'Directive', desc: 'A directive is a special type of AngularJS object. It gives HTML classes a new \
                                        functionality over and above vanilla CSS-styling.'}
    ]
    $scope.directives = [
        { name: 'ng-controller', direct: 'Directive for injecting data into HTML'},
        { name: 'ng-include', direct: 'Directive for embedding HTML within HTML'},
        { name: 'ng-model', direct: 'Directive for data binding'},
        { name: 'ng-repeat', direct: 'Directive for iterative binding'},
    ]
}
