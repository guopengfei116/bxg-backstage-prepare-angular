angular.module('app', [

  // 第三方模块
  'ngRoute', 

  // 自己的组件
  'course',
  'category',
  'teacher',
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
  'web_api',
  'avatar'
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
      .when('/teacher/add', {
        template: '<ngl-aside/><ngl-tc-add/>'
      })
      .when('/teacher/edit', {
        template: '<ngl-aside/><ngl-tc-edit/>'
      })
      .when('/teacher/list', {
        template: '<ngl-aside/><ngl-tc-list/>'
      })
      .when('/category/add', {
        template: '<ngl-aside/><ngl-cg-add/>'
      })
      .when('/category/edit', {
        template: '<ngl-aside/><ngl-cg-edit/>'
      })
      .when('/category/list', {
        template: '<ngl-aside/><ngl-cg-list/>'
      })
      .when('/course/add', {
        template: '<ngl-aside/><ngl-cs-add/>'
      })
      .when('/course/edit1', {
        template: '<ngl-aside/><ngl-cs-edit1/>'
      })
      .when('/course/edit2', {
        template: '<ngl-aside/><ngl-cs-edit2/>'
      })
      .when('/course/edit3', {
        template: '<ngl-aside/><ngl-cs-edit3/>'
      })
      .when('/course/list', {
        template: '<ngl-aside/><ngl-cs-list/>'
      })
      .otherwise({
        templateUrl: '/src/html/404.html'
      })
  }])

  // run方法是在angular解析视图之前执行的，一般我们会在这里面做一些权限校验
  .run([
    '$location',
    function($location) {
      // 通过判断本地cookie中是否存在PHPSESSID，来校验用户是否已登陆
      // 如果在login页面，用户已经登陆了，帮用户自动跳转到index页，
      // 如果在其他页面，用户未登陆，强制给他跳转到login页
      var isLogin = /PHPSESSID=/.test(document.cookie);
      var path = $location.$$path;

      // 登陆页已登陆，转首页
      // 其他页未登陆，转登陆
      if(path == '/login' && isLogin) {
        $location.path('/');
      }else if(!isLogin) {
        $location.path('/login');
      }
    }
  ]);