(function() {
    'use strict'

    angular.module('newsFeedsApp')
        .service('TokenService', TokenService);

    function TokenService($log) {
        var token = null;
        this.hasToken = hasToken;
        this.getToken = getToken;
        this.setToken = setToken;

        function hasToken() {
            $log.debug('token ' + token);
            return token !== null;
        };

        function getToken() {
            return token;
        };

        function setToken(newToken) {
            token = newToken;
        };
    };
})();