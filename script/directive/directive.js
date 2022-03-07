var myApp = angular
                .module("main",[])
                //bind
                .controller('bind', ['$scope', function($scope) {
                    $scope.name = 'Dhruvil';
                  }]);