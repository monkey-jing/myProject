/**
 * Created by Useradmin on 2016/11/24.
 */
angular.module("marsService",[]);
var myapp=angular.module("myapp",["ionic","marsService"]);

myapp.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state("tabs",{
            url:"/tabs",
            abstract:true,
            templateUrl:"templates/tabs.html"
        })
        .state("tabs.home",{
            url:"/home",
            views:{"tab-home":{templateUrl:"templates/home/home.html"}}
        })
        .state("tabs.fashion",{
            url:"/fashion",
            views:{"tab-fashion":{templateUrl:"templates/fashion/fashion.html"}}
        })
        .state("tabs.fashion_fDetail",{
            url:"/fashion_fDetail/:fashionInfo",
            views:{"tab-fashion":{templateUrl:"templates/fashion/fDetail.html"}}
        })
        .state("tabs.home_products",{
            url:"/home_products",
            views:{"tab-home":{templateUrl:"templates/products/products.html"}}
        })
        .state("tabs.pDetail",{
            url:"/pDetail/:product",
            views:{"tab-home":{templateUrl:"templates/products/pDetail.html"}}
        })
        .state("tabs.cart",{
            url:"/cart",
            views:{"tab-cart":{templateUrl:"templates/cart/cart.html"}}
        })
        .state("tabs.uerInfo",{
            url:"/uerInfo",
            views:{"tab-cart":{templateUrl:"templates/userInfo.html"}}
        })
        .state("tabs.my",{
            url:"/my",
            views:{"tab-my":{templateUrl:"templates/my.html"}}
        });

    $urlRouterProvider.otherwise("/tabs/home");
})
//隐藏tabs导航
myapp.directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            scope.$on('$ionicView.beforeEnter', function() {
                scope.$watch(attributes.hideTabs, function(value){
                    $rootScope.hideTabs = value;
                });
            });

            scope.$on('$ionicView.beforeLeave', function() {
                $rootScope.hideTabs = false;
            });
        }
    };
});
