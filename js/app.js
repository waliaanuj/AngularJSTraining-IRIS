//Define an angular module for our app
var sampleApp = angular.module('sampleApp', []);

//Define Routing for app
//Uri /AddNewOrder -> template AddOrder.html and Controller AddOrderController
//Uri /ShowOrders -> template ShowOrders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddNewOrder', {
	templateUrl: './add_order.html',
	controller: 'AddOrderController'
      }).
      when('/ShowOrders', {
	templateUrl: './show_orders.html',
	controller: 'ShowOrdersController'
      }).
      otherwise({
	redirectTo: '/AddNewOrder'
      });
}]);


sampleApp.controller('AddOrderController', function($scope) {
	
	alert("invoke 1");
	$scope.message = 'This is Add new order screen';
	
});


sampleApp.controller('ShowOrdersController', function($scope) {
	alert("invoke 2");
	$scope.message = 'This is Show orders screen';

});
