var app = angular.module("storyApp", ["ngRoute"])
    app.config(function($routeProvider){
        $routeProvider
        .when("/home", {
            templateUrl: "home.html"
        })
        .when("/carlos", {
            templateUrl: "carlos.html"
        })
        .when("/dee", {
            templateUrl: "dee.html"
        })
        .when("/milo", {
            templateUrl: "milo.html"
        })
        .otherwise({
            templateUrl: "home.html"
        })
 });