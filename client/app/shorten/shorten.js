angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.addLink = function(url) {
    Links.addOne({url: url})
    .then(function(resp) {
      $location.url('/links');
    });
  };

  $scope.updateValidIndicators = function(url) {
    if (!url) {
      return $scope.validClass = '';
    }
    if (Links.validateUrl(url)) {
      $scope.validClass = 'valid';
    } else {
      $scope.validClass = 'invalid';
    }
  };
});
