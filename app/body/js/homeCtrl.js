casperApp.controller('homeCtrl', function($scope,ergastAPIservice) {
    ergastAPIservice.getProductDetails().then(function (response) {
        $scope.MyData = response.data;
    });
    $scope.myFilter = function(item){
        return (item.id != 2);
    };
    $scope.filterThat = function (item) {
        if (item.sell != null){
            return item
        }

    }

});
casperApp.controller('productCtrl', function($http,$stateParams,$scope,ergastAPIservice,$state) {
    $scope.thisAlbum = $state.params.id;
    $scope.catId = $state.params.cat;
    $scope.productID = $stateParams.id;
    $scope.cat = $stateParams.cat;
    $scope.ProductDetails = null;
    $scope.ProductDetail = null;
    ergastAPIservice.getProductDetails($scope.productID).then(function (response) {
        $scope.ProductDetails = response.data;
    });
    ergastAPIservice.getProductDetails($scope.cat).then(function (response) {
        $scope.ProductDetail = response.data;
    });

});
