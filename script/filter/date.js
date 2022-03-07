var myApp = angular
                .module("main",[])
                // filter:date
                .controller("date",function ($scope){
                    var dates=[
                        {date:new Date("November 27 2000")}
                    ]
                    $scope.dates = dates;
                })