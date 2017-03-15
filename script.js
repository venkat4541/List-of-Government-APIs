var app = angular.module('guvApi', []);

app.controller('listApi', ['$scope', '$http', function($scope, $http) {
  $http.get('https://pages.18f.gov/API-All-the-X/data/individual_apis.json').then(function(data) {
    var info = data.data;
    $scope.name = info[0].name;
    $scope.org = info[0].apis[0].name;
    $scope.url = info[0].apis[0].url;
    console.log($scope.name);
    console.log($scope.org);
    console.log($scope.url);
  });
}]);
