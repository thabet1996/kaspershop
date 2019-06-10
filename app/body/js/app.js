var casperApp = angular.module("casperApp", ['ui.router']);
casperApp.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('index', {
            url: "/",
            templateUrl: 'app/body/html/content.html',
            param: {
                id: null,
                cat: null
            }
        })
        .state('product', {
            url: "/product/:id/:cat",
            templateUrl: 'app/body/html/deatils.html',
            controller: 'productCtrl',
            param: {
                id: null,
                cat: null
            }
        })
        .state('location', {
            url: "/location",
            templateUrl: 'app/body/html/location.html',
        })
        .state('about', {
            url: "/about",
            templateUrl: 'app/body/html/about.html',
        })
        .state('discount', {
            url: "/discount",
            templateUrl: 'app/body/html/dicount.html',
            controller: "homeCtrl",
            param: {
                id: null,
                cat: null
            }
        })
        .state('best', {
            url: "/best",
            templateUrl: 'app/body/html/best.html',
            controller: "homeCtrl",
        })
        .state('sell', {
            url: "/sell/:cat",
            templateUrl: 'app/body/html/sell.html',
            controller: "homeCtrl",
            param: {
                id: null,
                cat: null
            }
        })
        .state('services', {
            url: "/services",
            templateUrl: 'app/body/html/services.html',
        })
        .state('contact', {
            url: "/contact",
            templateUrl: 'app/body/html/contact.html',
        })
        .state('register', {
            url: "/register",
            templateUrl: 'registerPage.php',
            controller : 'registerCtrl'
        })
        .state('categories', {
            url: "/categories",
            templateUrl: 'app/body/html/categories.html',
            controller: "homeCtrl",

        });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});
