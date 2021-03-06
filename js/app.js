var demoApp = angular.module('demoApp', [
   'ngRoute',
    'demoController'

]);

demoApp.service('dataService', function($http) {

    //Read json data into allMovieData from data/imdb250.json
    var allMovieData = null;
    var listData = function(callback) {
        $http.get('data/imdb250.json').success(function(data) {
            allMovieData = data;

            var searchData = [];
            for(var idx=0; idx < data.length; idx++){
                searchData.push({rank: data[idx].rank, title: data[idx].title, id: data[idx].imdbID });
            }
            callback(searchData);
        });

    };

    var detailData = function(movieId, callback){
        callback(allMovieData[movieID.rank-1]);
    }
    //index through movieData and push each movie, id, rank and genre to gallery dataset
    var galleryData = function(callback){
        $http.get('data/imdb250.json').success(function(data) {
            var gallery_dataset = [];
            for(var idx=0; idx < data.length; idx++){
                gallery_dataset.push({id: data[idx].imdbID, rank: data[idx].rank, genre: data[idx].genre});
            }
            callback(gallery_dataset);
        });
    }

    return {
        listData: listData,
        detailData: detailData,
        galleryData: galleryData
    };
});
//config demoApp to direct to /gallery on default, with partials
demoApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/list',{
            templateUrl:'partials/list.html',
            controller: 'listController'
        }).
        when('/details/:rank',{
            templateUrl:'partials/details.html',
            controller:'detailsController'
        }).
        when('/gallery',{
            templateUrl:'partials/gallery.html',
            controller: 'galleryController'
        }).
        otherwise({
           redirectTo:'/gallery'
        });
}]);
