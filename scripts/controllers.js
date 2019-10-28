function ExampleController($scope){
    $scope.mantra = [
        {coding: "javascript", fun: "beach ball"},
        {coding: "typescript", fun: "skateboard"},
        {coding: "angular 2", fun: "poodles"},
        {coding: "angularjs", fun: "ice fishing"}
    ]
    
}

function DictionaryController($scope){
    $scope.dictionary = [
        {name: 'Data Binding', desc: 'A data binding is a way of dynamically updating elements based on changes made to the Model through the View'},
        {name: 'Directive', desc: 'A directive is a special type of AngularJS object. It gives HTML classes a new functionality over and above vanilla CSS-styling.'}
    ]
}