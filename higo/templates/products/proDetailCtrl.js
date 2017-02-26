/**
 * Created by Useradmin on 2016/11/27.
 */
angular.module("myapp").controller("proDetailCtrl", function ($scope,$http,$state,$stateParams,cartShop) {
    $scope.selectProduct=JSON.parse($stateParams.product);
    //加入购物车
    $scope.add = function(product){
        // 调用购物车对象的add方法
        cartShop.add(product);
    };
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