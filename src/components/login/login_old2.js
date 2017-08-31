angular.module('login', [])
  .directive('nglLogin', [
    function() {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: '/src/components/login/login.html',
        replace: true,
        controller: 'nglLoginCtrl'
      };
    }
  ])
  // 功能点：1、登陆跳到到首页 2、登陆成功的返回信息要本地持久化存储 3、历史登陆用户的头像展示
  .controller('nglLoginCtrl', [
    '$scope',
    '$location',
    'WEB_API',
    'http',
    function($scope, $location, WEB_API, http) {

      // 登陆功能
      $scope.user = {
        tc_name: '',
        tc_pass: ''
      };
      $scope.login = function() {

        // api => { url: '/v6/login', method: 'post' }
        var api = WEB_API.login;
        // 这里中括号是写法调用get、post方法
        http[api.method](api.url, function(data) {
          localStorage.setItem('userInfo', JSON.stringify(data));
          $location.path('/');
        }, $scope.user);
      };
    }
  ]);
