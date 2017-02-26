/**
 * Created by Useradmin on 2016/11/26.
 */
angular.module("myapp").controller("fashionCtrl", function ($scope,$http,$state) {
    $scope.fashionInfo=[];
    $http.get("products-data.json").success(function (data) {
        $scope.fashionInfo=data.fashion;
    })
    $scope.gotoFaDetail= function (fashion) {
        $state.go("tabs.fashion_fDetail",{fashionInfo:JSON.stringify(fashion)})
    }

})