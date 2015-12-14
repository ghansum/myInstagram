/*global angular*/
angular.module('Instagram')
    .factory('API', function($http) {

      return {
        getFeed: function() {
          return $http.get('http://instaviews.herokuapp.com/api/feed');
        },
        getMediaById: function(id) {
          return $http.get('http://instaviews.herokuapp.com/api/media/' + id);
        },
        likeMedia: function(id) {
          return $http.post('http://instaviews.herokuapp.com/api/like', { mediaId: id });
        }
      }

    });