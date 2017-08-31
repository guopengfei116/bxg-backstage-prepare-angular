// 这个服务结合了http与WEB_API为一体
angular.module('api', [])
    .factory('api', [
        'WEB_API',
        'http',
        function(WEB_API, http) {
            var api = {};

            // WEB_API中有多少配置，我们就有多少方法
            // 这里遍历WEB_API对象，以他的key为作为方法名字，添加到api对象上
            // 最终api对象 => { login: fn, logout: fn }
            angular.forEach(WEB_API, function(config, key) {

                // 这里的方法就是为了封装http，
                // 然后用户只需要给我回调和数据即可
                api[key] = function(fn, data) {
                    http[config.method](config.url, fn, data);
                };
            });

            return api;
        }
    ]);
