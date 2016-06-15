// Code goes here

// Code goes here

var app = angular.module("app",['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
  
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'homecntrl'
  })
  .when('/ShowOrder/MyDetails', {
    templateUrl: 'home.html',
    controller: 'homecntrl'
  })
  .when('/ShowOrder/NewDetails', {
    templateUrl: 'neworder.html',
    controller: 'newcntrl'
  });
}]);

app.controller("homecntrl", function($scope, $http) {
  
  $http.get("data.json").success(function(data) {
    
    $scope.details = data;
    
  });
  
});

app.controller("newordercntrl",function($scope,$http){
  $scope.addNewOrder() = function(){
    $http.get("data.json").success(function(data){
      var details = [];
      for(var rec in data){
        details.push(rec);
      }
      var newDetail = [{media:"$scope.media",name:"$scope.name",icon:"$scope.icon",users:"$scope.users"}];
      
      details.push(newDetail);
      JSON.stringify("data.json", details);
    })
  }
});