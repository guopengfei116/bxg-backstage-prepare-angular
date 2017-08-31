angular.module('app', [

  // 第三方模块
  'ngRoute', 

  // 自己的组件
  'aside', 
  'header', 
  'index', 
  'login',
  'profile',
  'repass',

  // 自己的业务逻辑服务
  'http',
  'api',
  
  // 自己的公共配置服务
  'web_api'
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
          template: '<ngl-aside></ngl-aside><ngl-index></ngl-index>'
      })
      .when('/index', {
          redirectTo: '/'
      })
      .when('/login', {
          template: '<ngl-login></ngl-login>'
      })
      .when('/profile', {
        template: '<ngl-aside/><ngl-profile/>'
      })
      .when('/repass', {
        template: '<ngl-aside/><ngl-repass/>'
      })
      .otherwise({
        templateUrl: '/src/html/404.html'
      })
  }])