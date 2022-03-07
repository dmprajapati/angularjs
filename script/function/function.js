var myApp = angular
                .module("main",[])
                //angular_bind
                .controller("bindController",function($scope){
                    $scope.num1 = 0;
                    $scope.num2 = 0;
                    $scope.bindDemo = function () {
                        var add = angular.bind(this, function (a, b) {
                            return a + b;
                        });
                        $scope.Add = add($scope.num1, $scope.num2);
                        $scope.demo = function() {

                        };
                    }
                })


                //angular_bootstrap
                .controller('bootstrap', function($scope) {
                    $scope.message = 'angular_bootstrap';
                })


                //angular_copy
                .controller('copy', ['$scope', function($scope) {
                    $scope.leader = {};
                
                    $scope.reset = function() {
                      $scope.user = angular.copy($scope.leader);
                    };
                
                    $scope.update = function(user) {
                      angular.copy(user, $scope.leader);
                    };
                
                    $scope.reset();
                  }])


                //angular_equals
                .controller('equals', ['$scope', function($scope) {
                    $scope.user1 = {};
                    $scope.user2 = {};
                    $scope.compare = function() {
                      $scope.result = angular.equals($scope.user1, $scope.user2);
                    };
                  }])


                  //angular_extend
                  .controller('extend', ['$scope', function($scope) {
                    $scope.user1 = {};
                    $scope.user2 = {};
                    $scope.extend = function() {
                      $scope.result = angular.extend({axe:35},$scope.user1,$scope.user2);
                    };
                  }])


                  //angular_isarray
                  .controller('isarray', ['$scope', function ($scope) {

                    $scope.demoarray = [
                    { name: 'Dhruvil' }, 
                    { name: 'Harshil' }, 
                    { name: 'Jaimin' }
                    ];
                
                    $scope.demostring = "DMP";

                    $scope.arrayCheck = function(value){
                        if(angular.isArray(value)){
                            return "This is Array";
                        } else {
                            return  "This is not an Array";
                        }
                    }
                
                }])


                //angular_isdate
                .controller('isdate', ['$scope', function ($scope) {

                    $scope.demodate = new Date();
                
                    $scope.demostring = "DMP";

                    $scope.dateCheck = function(value){
                        if(angular.isDate(value)){
                            return "This is date";
                        } else {
                            return  "This is not a date";
                        }
                    }
                
                }])

                 //angular_isdefined
                 .controller('isdefined', ['$scope', function ($scope) {

                    $scope.demodate = new Date();

                    $scope.demoempty;
                
                    $scope.demostring = "DMP";

                    $scope.isDefined = function(value){
                        if(angular.isDefined(value)){
                            return "This value is defined";
                        } else {
                            return  "This value is not a defined";
                        }
                    }
                
                }])

                 //angular_iselement
                 .controller('iselement', ['$scope', function ($scope) {

                    $scope.demodate = new Date();
                
                    $scope.demostring = "DMP";

                    $scope.demoelement = document.getElementById('myButton');

                    $scope.isElement = function(value){
                        if(angular.isElement(value)){
                            return "This value is DOM Element";
                        } else {
                            return  "This value is not a DOM Element";
                        }
                    }
                
                }])

                //angular_isfunction
                .controller('isfunction', ['$scope', function ($scope) {

                    $scope.demodate = new Date();
                
                    $scope.demostring = "DMP";

                    $scope.demofunction =  function(){
                        return 0;
                    }

                    $scope.demonumber = 10;

                    $scope.isFunction = function(value){
                        if(angular.isFunction(value)){
                            return "This is a function";
                        } else {
                            return  "This is not a function";
                        }
                    }

                    
                
                }])


                //angular_isnum
                .controller('isnum', ['$scope', function ($scope) {

                    $scope.demodate = new Date();
                
                    $scope.demostring = "DMP";

                    $scope.demonum = 10;

                    scope.isNumber = function(value){
                        if(angular.isNumber(value)){
                            return "This is a Number";
                        } else {
                            return  "This is not a Number";
                        }
                    }
                
                }])


                 //angular_isobject
                 .controller('isobject', ['$scope', function ($scope) {

                    $scope.demodate = new Date();
                
                    $scope.demostring = "DMP";

                    $scope.demoobj = {name:"Dhruvil"};

                    $scope.isObject = function(value){
                        if(angular.isObject(value)){
                            return "This is Object";
                        } else {
                            return  "This is not a Object";
                        }
                    }
                
                }])

                //angular_isstring
                .controller('isstring', ['$scope', function ($scope) {

                    $scope.demodate = new Date();
                
                    $scope.demostring = "DMP";

                    $scope.isString = function(value){
                        if(angular.isString(value)){
                            return "This is a String";
                        } else {
                            return  "This is not a String";
                        }
                    }
                
                }])

                //angular_isundefined
                .controller('isundefined', ['$scope', function ($scope) {

                    $scope.demodate = new Date();
                
                    $scope.demostring = "DMP";

                    $scope.demo;

                    $scope.isUndefined = function(value){
                        if(angular.isUndefined(value)){
                            return "This value is Undefined";
                        } else {
                            return  "This value is Defined";
                        }
                    }
                
                }])

                //angular_merge
                .controller('merge', ['$scope', function ($scope) {
    
                    var obj1 = {fname:"Dhruvil",lname:"Prajapati"};

                    var obj2 = {gender:"male"};
                
                    $scope.obj1 = obj1;
                    $scope.obj2 = obj2;
                
                    //merge obj1 & obj2 as obj
                    $scope.obj = angular.merge({/* add extra attr in obj*/},obj1,obj2);
                
                }]);
                  