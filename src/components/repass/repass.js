angular.module('repass', [])
  .directive('nglRepass', [function() {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: '/src/components/repass/repass.html',
      replace: true,
      controller: 'nglRepassCtrl'
    };
  }])
  .controller('nglRepassCtrl', [
    '$rootScope', 
    '$scope', 
    'api',
    function($rootScope, $scope, api) {
    
      $scope.user = {
        tc_pass: '',
        tc_new_pass: '',
        tc_new_pass_repeat: ''
      };
      
      // 修改密码，
      // 先效验两次新密码是否一致，
      // 一致则调用api.repass修改密码
      // 成功后，通过根$scope向下发送一个logout事件，触发头部的退出功能
      $scope.repass = function() {

        // 校验
        if($scope.user.tc_new_pass !== $scope.user.tc_new_pass_repeat) {
          alert('两次确认密码不一致!');
          return;
        }

        // 修改密码，成功后退出
        api.repass(function() {
          $rootScope.$broadcast('logout');
        }, $scope.user);
      };

    }
  ]);