angular.module('teacher')
  .directive('nglTcList', [
    function() {
        return {
          scope: {},
          restrict: 'E',
          templateUrl: '/src/components/teacher/list/list.html',
          replace: true,
          controller: 'nglTcListCtrl'
        };
    }])
  .controller('nglTcListCtrl', [
    '$scope',
    function($scope) {
      console.log('讲师列表');
    }])
