var phonecatApp = angular.module('fapiApp', []);

phonecatApp.controller('LcdCtrl', ['$scope', '$http', function($scope,  $http) {
    $scope.display = { 
        line1: '',
        line2: ''
    };

    $scope.change = function() {
        updateDisplay();
    };

    $scope.clear = function() {
        $scope.display.line1 = '';
        $scope.display.line2 = '';
        $http.post('/macros/clearLcd', {});
    };  
    
    var updateDisplay = function() {
        if($scope.display.line1 !== '') {
            $http.post('/macros/setLcdLineOne/'+$scope.display.line1, {})
        }
        if($scope.display.line2 !== ''){
            $http.post('/macros/setLcdLineTwo/'+$scope.display.line2, {});
        }
    }
    
}]);