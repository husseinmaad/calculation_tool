/* JavaScript Document */

(function(){
  var app = angular.module('myCalculator',[]);
  app.controller('calculatorController',['$scope',function($scope){
    $scope.lumen_options = [375,600,900,1125,1600];
    $scope.current_lumens = 600;
    $scope.current_cost =13;
    $scope.current_hours = 4;
    $scope.total_days = 365;
    //conversion values from the INTERNET 
    $scope.inc_conversion = .0625;
    $scope.hal_conversion = .0450;
    $scope.inc_conversion = .0146;
    $scope.inc_conversion = .0125;
    // to calculate the wattage we will multiply
    // the number of watt with conversation number 
    $scope.calculate = function(){
      $scope.inc_wattage = ($scope.current_lumens * $scope.inc_conversion).toFixed(1);
      console.log($scope.inc_wattage )
    }
    $scope.calculate();
  }]);
})()

