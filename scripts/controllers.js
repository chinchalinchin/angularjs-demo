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
        $document[0].querySelector('#binder').focus()
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
        {name: 'Scope', desc: 'Scope is the level of access the View has to the Model. When a Controller is bound to\
                                an HTML element, the scope ($scope) is injected into that Controller, which allows the View to\
                                alter and interact with the Model.'}
    ]
    $scope.directives = [
        { name: 'ng-app', direct: "'ng-app' tells AngularJS to compile all child HTML elements within this element\
                                    into an AngularJS app. This is always necessary."},
        { name: 'ng-click', direct: "'ng-click' genereates an event whenever the user clicks a key within this element\
                                        which can be hooked in the scope of the Controller the element is embeded in,\
                                        or used just like the HTML 'onclick' attribute"},
        { name: 'ng-controller', direct: "ng-controller' allows an element in View to modify the Model. This directive scopes\
                                            a controller within an HTML element. "},
        { name: 'ng-include', direct: "'ng-include' binds a single element to a larger HTML source file. The src attribute\
                                        is set to location the desired HTML page."},
        { name: 'ng-init', direct: "'ng-init' initializes values within the same scope? Still researching this."},
        { name: 'ng-model', direct: "'ng-model binds the value of an input element to the scope of a controller. Note, ng-model\
                                        implicitly has a controller tied to it."},
        { name: 'ng-repeat', direct: "'ng-repeat' allows an element to binded to an iterable object within the scope of the\
                                        controller"},
    ]
}
