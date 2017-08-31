angular.module('aside', [])
  .directive('nglAside', [
    function() {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: '/src/components/common/aside/aside.html',
        replace: true,
        controller: 'nglAsideCtrl'
      };
    }
  ])
  .controller('nglAsideCtrl', [
    '$scope', 
    '$location',
    'default_avatar',
    function($scope, $location, default_avatar) {
      // 左侧功能点：
      // 1、用户信息回显
      // 2、根据path定位导航焦点
      // 3、导航点击收起与隐藏

      // 1、用户信息回显
      var userInfo = JSON.parse(localStorage.getItem('userInfo'));
      $scope.userInfo = userInfo || { tc_avatar: default_avatar };

      // 2、根据path定位导航焦点
      $scope.path = $location.$$path;

      // 3、导航点击收起与隐藏
      // 提取url中的第一层路径，用来控制默认的nav显示
      var pathRoot = $scope.path.split('/')[1]; 
      $scope.navIsShow = {
        teacher: pathRoot == 'teacher',
        category: pathRoot == 'category',
        course: pathRoot == 'course'
      };
      // 传入对应的key，自动取反，显示隐藏互相切换
      $scope.changeNav = function(navName) {
        $scope.navIsShow[navName] = !$scope.navIsShow[navName];
      };
    }
  ]);