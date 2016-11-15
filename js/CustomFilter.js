/**
 * Created by anuj.walia on 05-02-2015.
 */
angular.module('myReverseModule',[]).filter('reverse',function(){
    return function(input, uppercase){
        input = input || '';
        var out = "";
        for (var i=0;i<input.length;i++)
        {
            out = input.charAt(i) + out;
        }
        if(uppercase){
            out.toUpperCase();
        }
        return out;
    }
}).controller('myController',[
    '$scope',function($scope){
        $scope.greeting = "Hello Anuj";
        $scope.spicyFunction = function(){
            $scope.greeting = "Spicy Function Called";
        }
    }
]);
