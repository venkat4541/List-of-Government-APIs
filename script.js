var app = angular.module('guvApi', []);

app.controller('listApi', ['$scope', '$http', function($scope, $http) {
  $http.get('https://pages.18f.gov/API-All-the-X/data/individual_apis.json').then(function(data) {
    $scope.info = data.data;
  });
}]);
