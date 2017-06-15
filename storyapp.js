var app = angular.module("storyApp", ["ngRoute"])
    app.config(function($routeProvider){
        $routeProvider
        .when("/home", {
            templateUrl: "home.html"
        })
        .when("/carlo", {
            templateUrl: "carlo.html"
        })
        .when("/tiffany", {
            templateUrl: "tiffany.html"
        })
        .when("/rynald", {
            templateUrl: "rynald.html"
        })
        .otherwise({
            templateUrl: "home.html"
        })
 });