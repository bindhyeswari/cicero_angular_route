angular.module('myapp.services', []).factory('Github', function ($http) {
    return {
        search: function (query) {
            return $http.get('https://api.github.com/search/repositories?q=' + query);
        }
    };
});