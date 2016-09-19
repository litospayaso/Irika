/*global angular*/

var jq = $.noConflict();

angular.module("bagoaz", ["ngNewRouter"])
    .controller("MainController", ["$rootScope", "$scope", "$router", "$location", "$http", function ($rootScope, $scope, $router, $location, $http) {
        "use strict";

        //Fuction to close navbar after clicking.
        jq(".navbar-nav li a").click(function(event) {
            jq(".navbar-collapse").collapse('hide');
        });

        var lastScrollTop = 0;

        jq(document).ready(function(){
            jq(window).scroll(function(event){
                var st = jq(this).scrollTop();
                if (st > lastScrollTop){
                    jq("#navBar").hide(750);
                } else {
                    jq("#navBar").show(750);
                }
                lastScrollTop = st;
            });
        });
        //Funcion to hide navbar on scroll down and show it on scroll up.
        // var navbar        = $('.navbar');


        $router.config([
            {
                path: "/bagoazAbout",
                components: {
                    "main": "bagoazAbout"
                }
            }, {
                path: "/gessamiHelp",
                components: {
                    "main": "gessamiHelp"
                }
            }, {
                path: "/userConfiguration",
                components: {
                    "main": "userConfiguration"
                }
            }, {
                path: "/userInformation",
                components: {
                    "main": "userInformation"
                }
            },{
                path: "/bagoazGaiak",
                components: {
                    "main": "bagoazGaiak"
                }
            },{
                path: "/bagoazLexiko",
                components: {
                    "main": "bagoazLexiko"
                }
            },{
                path: "/bagoazAriketak",
                components: {
                    "main": "bagoazAriketak"
                }
            },{
                path: "/bagoazIkusi/:variable1/:variable2",
                components: {
                    "main": "bagoazIkusi"
                }
            },{
                path: "/bagoazBaloratzea/:variable1",
                components: {
                    "main": "bagoazBaloratzea"
                }
            }
        ]);

        $scope.initApp = function () {
            $location.path("/bagoazGaiak");
        };

        $scope.moveScreen = function (targetScreen) {
            $location.path(targetScreen);
        };

        $http.get('database/bagoaz-export.json').success(function (data) {
            console.log("dataaa",data);
            //Convert data to array.
            //datos lo tenemos disponible en la vista gracias a $scope
            //console.log("datooos",data);
            $rootScope.gaiak = data.gaiak;
            $rootScope.lexiko = data.lexiko;
            $rootScope.ariketak = data.ariketak;
        });

    }]);