var myApp = angular
                .module("main",[])
                .controller("empData",function($scope){
                    var employees = [
                        {name: "Dhruvil",dob:new Date("November 27 2000")},
                        {name: "Harshil",dob:new Date("December 20 2000")},
                        {name: "Jaimin",dob:new Date("August 07 2000")},
                        {name: "Nirali",dob:new Date("March 11 2000")}
                    ]
                    $scope.employees = employees;
                    $scope.rowLimit =3;

                    $scope.sortColumn = 'name';

                    $scope.reverseSort = false;

                    $scope.sortData = function(column){
                        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort: false;
                        $scope.sortColumn = column;
                    }
                    $scope.getSortClass = function (column) {

                        if ($scope.sortColumn == column) {
                            return $scope.reverseSort? 'arrow-down' : 'arrow-up';
                        }
                        return '';
                    }
                })