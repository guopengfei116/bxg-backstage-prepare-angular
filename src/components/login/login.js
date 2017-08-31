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
    '$http',
    function($scope, $location, $http) {

      // 登陆功能
      $scope.user = {
        tc_name: '',
        tc_pass: ''
      };
      $scope.login = function() {

        $http({
          url: '/v6/login',
          method: 'post',
          data: 'tc_name=' + $scope.user.tc_name + '&' + 'tc_pass=' + $scope.user.tc_pass,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(function(resp) {
            var data = resp.data;
            if(data.code == 200) {
              localStorage.setItem('userInfo', JSON.stringify(data.result));
              $location.path('/');
            }else {
              alert('服务器错误');
            }
          })
      };
    }
  ]);
