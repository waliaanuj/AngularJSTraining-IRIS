/**
 * Created by anuj.walia on 09-02-2015.
 */

angular.module('docsSimpleDirective',[]).controller(
    'Controller',['$scope',function($scope) {
        $scope.customer = {
            name: 'NIIT',
            address: '1600 Delhi'
        };
    }]
).directive('myCustomer',function(){
        return {
            restrict:'E',
            template:'Name:{{customer.name}}Address:{{customer.address}}'
        }
    }).directive('myCustomer2',function(){
        return {
            restrict:'E',
            templateUrl:'abc.html'
        }
    });