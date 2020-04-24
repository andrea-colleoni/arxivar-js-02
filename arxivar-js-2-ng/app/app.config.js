angular
    .module('corsoJS')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/phones', {
                template: '<phone-list></phone-list>'
            })
            .when('/phones/:phoneId', {
                template: '<phone-details></phone-details>'
            })
            .when('/pippo', {
                template: '<h1>Pippo!!!!</h1>'
            })            
            .otherwise('/phones');
    }]
);