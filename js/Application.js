(function(){
  var app = angular.module("myApp",[]);
  app.controller("myController", function($scope,$injector){

  $scope.helloTo={};
  $scope.helloTo.title = "World,AngularJS";
  $scope.firstName="Anuj";
  $scope.lastName="Walia";
  $scope.fullName = function(){
                                var x= $scope;
                                return x.firstName+ "" + x.lastName;
                              }
  $scope.someFunction = function($http,$scope){

  }
  console.log($scope.someFunction);
  console.log($injector.annotate($scope.someFunction));
});
app.controller("myCtrl", function() {
    var self = this;
    self.firstName = "John";
    self.lastName = "Doe";
    self.alertUser = function(){

        alert("User Alerted!!");
    }
});
})();
