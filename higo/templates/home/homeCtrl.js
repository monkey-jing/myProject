/**
 * Created by Useradmin on 2016/11/25.
 */
angular.module("myapp").controller("homeCtrl", function ($scope,$interval,$http,$state) {
    //秒杀倒计时
    $scope.time=9000000000;
    $interval(function () {
        $scope.time-=1000;
    },1000);
    //商品列表
    $scope.homeProducts=[];
    $http.get("data.json").success(function (data) {
        $scope.homeProducts=data.miaosha;
    })
    $scope.homeProCategory=[];
    $http.get("products-data.json").success(function (data) {
        $scope.homeProCategory=data.productsCategory;
    })
    $scope.goToDetail= function (product) {
        $state.go("tabs.pDetail",{product:JSON.stringify(product)})
    }
    //点击让爱心变红
    $scope.isFall=false;
    $scope.pinkHeart= function () {
        if($scope.isFall==false){
            $scope.isFall=true;
        }else if($scope.isFall==true){
            $scope.isFall=false;
        }
        console.log($scope.isFall)
    }
})