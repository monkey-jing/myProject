/**
 * Created by Useradmin on 2016/11/26.
 */
angular.module("myapp").controller("cartCtrl", function ($scope,cartShop) {
    // 控制按钮的显示
    $scope.config = {
        showDelete: false,  // 控制删除按钮的显示和隐藏
        showReorder: false  // 控制重排按钮的显示和隐藏
    };
 /*   $scope.remove = function(product){
        // 首先找到要删除商品在原始商品数组中的索引值
        var index = $scope.data.indexOf(product);

        // 调用.splice方法删除它
        $scope.data.splice(index,1);
    };*/
    $scope.remove = function(item){
        cartShop.remove(item.proId);
    };
    // 首先拿到购物车中的所有商品
    $scope.cartDate = cartShop.findAll();

    // 计算所有商品的部数量
    $scope.totalNumber = function(){
        var total = 0;
        angular.forEach($scope.cartDate,function(item){
            total += item.number;
        });
        return total;
    };
    $scope.click= function () {
        console.log($scope.cartDate)
    }
    // 计算所有商品的总金额
    $scope.totalMoney = function(){
        var total = 0;
        angular.forEach($scope.cartDate,function(item){
            total += item.number * item.product.price;
        });
        return total;
    };
    $scope.add = function(product){
        // 调用购物车对象的add方法
        product.number++;
    };
    $scope.reduce = function(product){
        // 调用购物车对象的add方法
        if(product.number>0){
            product.number--;
        }
    };
})