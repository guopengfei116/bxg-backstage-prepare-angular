angular.module('header', [])
  .directive('nglHeader', [
    function() {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: '/src/components/common/header/header.html',
        replace: true,
        controller: 'nglHeaderCtrl'
      };
    }
  ])
  .controller('nglHeaderCtrl', [
    '$scope', 
    '$location',
    'api',
    function($scope, $location, api) {
      
      // 退出功能
      $scope.logout = function() {
        api.logout(function() {
          $location.path('/login');
        });
      };

      // 监听来自其他地方的logout事件，收到后就执行退出功能
      $scope.$on('logout', function() {
        $scope.logout();
      });
    }
  ]);
