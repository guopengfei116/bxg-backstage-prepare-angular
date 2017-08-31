angular.module('repass', [])
  .directive('nglRepass', [function() {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: '/src/components/repass/repass.html',
      replace: true,
      controller: ['$rootScope', '$scope', function($rootScope, $scope) {
        
        // 修改密码，修改成功后，通过根$scope向下发送一个logout事件，触发头部的退出功能
        $scope.repass = function() {
          $rootScope.$broadcast('logout');
        };

      }]
    };
  }]);