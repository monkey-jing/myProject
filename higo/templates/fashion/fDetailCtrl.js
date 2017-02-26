/**
 * Created by Useradmin on 2016/11/27.
 */
angular.module("myapp").controller("fDetailCtrl", function ($scope,$http,$state,$stateParams) {
    $scope.selectFashion=JSON.parse($stateParams.fashionInfo)
})