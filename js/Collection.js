(function(){var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  var self =this;
    self.records = [
       {
            "Name" : "Alfreds Futterkiste",
            "Country" : "Germany"
        },{
            "Name" : "Berglunds snabbköp",
            "Country" : "Sweden"
        },{
            "Name" : "Centro comercial Moctezuma",
            "Country" : "Mexico"
        },{
            "Name" : "Ernst Handel",
            "Country" : "Austria"
        }
    ]
    self.duplicateRecords = [
       "BSTS","TAG","HR","FINANCE","TAG","QA","QA"
    ]
});
})();
