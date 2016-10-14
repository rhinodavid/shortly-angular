angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.addLink = function(url) {
    Links.addOne({url: url})
    .then(function(resp) {
      $location.url('/links');
    });
  };
});
