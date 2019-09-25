casperApp.factory('ergastAPIservice', function($http) {

    var ergastAPI = [];
    ergastAPI.getProductDetails = function() {
        return $http({
            method: 'GET',
            url: 'static/products.json'
        });
    };
    return ergastAPI;
});