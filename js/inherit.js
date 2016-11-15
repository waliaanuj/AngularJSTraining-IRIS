importScripts()

var myApp = angular.module('scopeInheritance',[]);
myApp.controller('MainController',function($scope){
    $scope.timeOfTheDay = "morning";
    $scope.name = 'Anuj';
});
myApp.controller('ChildController',['$scope',function($scope){
    console.log(this);
    console.log($scope===this);
    console.log($scope.prototype===this.prototype);
    console.log($scope);
   // console.log($this);
    console.log($scope.__proto__);
    console.log(this.__proto__);
     console.log($scope.prototype);
    $scope.name = "Child";
}]);

myApp.controller('GrandChildController',['$scope',function($scope){
    $scope.name = "GrandChild";
}]);

myApp.controller('MyMainChildController',function($scope,$controller){

    $controller('MainController',{$scope:$scope});
    $scope.name = "My Main Child Controller";
});/* what is this crap
        if we can use this why are we using scope.
        What is the difference between this and scope
         how can we remove the instances in angular js
         is there any method called close in object class
         profiling tool for angular js
         object initialization in java
*/

/*topics for monday
* custom directives
* create services using service method in angularjs
* integration of jq and KendoUI with angular
* Integration with Karma.js
* Best Practices and design patterns
* */

