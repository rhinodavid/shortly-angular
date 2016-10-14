angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(url) {
    Links.addOne({url: url})
    .then(function(resp) {
      // console.log(resp);
    });
  };
});
