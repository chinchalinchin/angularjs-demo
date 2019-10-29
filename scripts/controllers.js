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
    $scope.push = function(entry){
        $scope.bindinglist.push(entry);
        $document[0].querySelector('#binder').value = ""
    }
    $scope.pushOnEnter = function(event, entry){
        // event.keyCode === 13 : ENTER
        if(event.keyCode === 13){ $scope.push(entry);}
    }
}

function DictionaryController($scope){
    // Fields 
    $scope.terms = [
        {name: 'Data Binding', desc: 'A data binding is a way of dynamically updating the Model, allowing the user\
                                        to interact with the model through the View. Data binding is essentially a\
                                        a direct window from the View into the Model. AngularJS technically accomplishes\
                                        this with a hidden controller that gets created during data-binding.'},
        {name: 'Directive', desc: 'A directive is a special type of AngularJS object. It gives HTML classes a new \
                                        functionality over and above vanilla CSS-styling. Directives are enabled\
                                        by AngularJS\'s under-the-hood jQuery and DOM manipulation that allow functionality\
                                        to be tied to css-selectors in html elements'},
        {name: 'Scope', desc: 'Scope is the level of HTML Elements within a Controller\'s  domain. When a controller\
                                is bound to an HTML element, the scope within that controller does not interact with\
                                the scope of controllers bound to other HTML elements. \n \n Point of research: What if\
                                a controller is bound to an element that is within the scope of another controller? Are\
                                the scopes hiearchical or isolated? '}
    ]
    $scope.directives = [
        { name: 'ng-click', direct: ""},
        { name: 'ng-controller', direct: 'ng-controller allows an element in View to modify the Model. This directive scopes\
                                            a controller within an HTML element. '},
        { name: 'ng-include', direct: 'ng-include binds a single element to a larger HTML source file. The src attribute\
                                        is set to location the desired HTML page.'},
        { name: 'ng-model', direct: 'ng-model binds the value of an input element to the scope of a controller. Note, ng-model\
                                        implicitly has a controller tied to it.'},
        { name: 'ng-repeat', direct: 'ng-repeat allows an element to binded to an iterable object within the scope of the\
                                        controller'},
    ]
}
