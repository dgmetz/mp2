//var demoApp = angular.module('demoApp', []);

// demoApp.controller('demoController', ['$scope', '$http', function($scope, $http) {
//   $http.get('public/data/cs498rk.json').success(function(data) {
//     $scope.courseInfo = data;
//     $scope.artistOrder = 'name';
//   });
// }]);

var demoControllers = angular.module('demoController', []);

demoControllers.controller('listController', function(dataService, $scope) {


   dataService.listData(function(data) {
      $scope.movies = data;
   });


});


demoControllers.controller('detailsController', function(dataService, $scope, $routeParams){

    dataService.detailData($routeParams, function(data){

       $scope.movie = data;
    });

});

demoControllers.controller('galleryController', function(dataService, $scope){

   dataService.galleryData(function(data){
       $scope.movies = data;
   });

});