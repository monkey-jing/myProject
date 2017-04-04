/**
 * Created by Useradmin on 2016/11/27.
 */
angular.module("myapp").controller("productCtrl", function ($scope,$http,$state) {
    $scope.products=[];
    $scope.proCategory=[];
    $http.get("products-data.json").success(function (data) {
        $scope.products=data.products;
        $scope.proCategory=data.productsCategory;
    })
    $scope.goToDetail= function (product) {
        $state.go("tabs.pDetail",{product:JSON.stringify(product)})
    }
    $scope.selectedCate=null;
    $scope.selectCategory=function(category){
        $scope.selectedCate=category;
        console.log($scope.selectedCate)
    }
})