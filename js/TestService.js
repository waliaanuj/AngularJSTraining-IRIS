/**
 * Created by anuj.walia on 05-02-2015.
 */


var abcModel = new Object();
abcModel.prop1="Anuj Walia";
abcModel.prop2=0;
abcModel.prop3 = new Date();

var defModel = new Object();
defModel["prop1"]="";
defModel["prop2"]=0;
defModel["prop3"] = new Date();

var app = angular.module('myApp', []);

app.factory('testFactory', function(){
    return {
        sayHello: function (text) {
            return "Factory says Hello";
            +text;

        },
        sayGoodBye: function (text) {
            return "Factory says GoodBye";
            +text;
        }
    }

});
app.service('testService',function(){
    this.sayHello= function(text){
        return "Service says Hello";+ text;

    };
    this.sayGoodBye= function(text){
        return "Service says GoodBye";+ text;

    };
});

app.controller('HelloCtrl',function($scope,testService,testFactory){
        $scope.fromService = testService.sayHello("World");
        $scope.fromFactory = testFactory.sayHello("World");
        console.log("Factory");
        console.log(testFactory);
      console.log("Service");
        console.log(testService);
    }

);
app.controller('GoodByeCtrl',function($scope,testService,testFactory){
        $scope.fromService = testService.sayGoodBye("World");
        $scope.fromFactory = testFactory.sayGoodBye("World");
    }

);

app.controller('ajaxCtrl',function($scope,myService){
        $scope.async = myService.async().success(function (data){
            $scope.async.successData= data;
            console.log(  $scope.async.successData);
        })
        console.log(myService.async());
    }

);
app.factory('myService',function($http){

    return {
        async : function(){
        return $http.get('./TestJSON.json');
    }
    };
    }
);

app.controller('injectedModelCtrl',function($scope){
        $scope.abcModel =abcModel;

    }

);

/*

 app.service('testService',function(){
 this.sayHello= function(text){
 return "Service says Hello";+ text;

 };
 this.sayGoodBye= function(text){
 return "Service says GoodBye";+ text;

 };
 });





var abcModel = new Object();
 abcModel.prop1="";
 abcModel.prop2=0;
 abcModel.prop3 = new Date();

 var defModel = new Object();
 defModel[prop1]="";
 defModel[prop2]=0;
 defModel[prop3] = new Date();

 app.controller('abcCtrl',function($scope,){
 $scope.fromService = testService.sayGoodBye("World");
 $scope.fromFactory = testFactory.sayGoodBye("World");
 }

 );
* */