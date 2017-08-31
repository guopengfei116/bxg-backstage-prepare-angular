angular.module('http', [])
    .service('http', [
        '$http',
        function($http) {

            // 对象转formData
            function toFormData(data) {
                var result = '';
                if(!data) {
                    return result;
                }
                for(var key in data) {
                    result += key + '=' + data[key] + '&';
                }
                return result.slice(0, -1);
            }

            // 封装get请求
            this.get = function(url, fn, data) {
                $http({
                    url: url,
                    method: 'get',
                    params: data || {}
                }).then(
                    function(resp) {
                        var data = resp.data;
                        if(data.code == 200) {
                            fn(data);
                        }else {
                            alert('服务器错误');
                        }
                    },
                    function() {
                        alert('网络错误');
                    }
                );
            };

            // 封装post请求
            this.post = function(url, fn, data) {
                $http({
                    url: url,
                    method: 'post',
                    data: toFormData(data),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(
                    function(resp) {
                        var data = resp.data;
                        if(data.code == 200) {
                            fn(data);
                        }else {
                            alert('服务器错误');
                        }
                    },
                    function() {
                        alert('网络错误');
                    }
                );
            };
        }
    ]);