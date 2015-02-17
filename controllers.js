angular.module('myapp.controllers', ['myapp.services']).controller('MyController', function ($scope, Github) {
    $scope.query = '';

    $scope.search = function (event) {
        if (event.keyCode === 13) {
            Github.search($scope.query).success(function (data) {
                $scope.items = data.items;
            });
        }
    };
});