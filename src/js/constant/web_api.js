angular.module('web_api', [])
    .constant('WEB_API', {

        // 登陆
        login: {
            url: '/v6/login',
            method: 'post'
        },

        // 退出
        logout: {
            url: '/v6/logout',
            method: 'post'
        },

        // 修改密码
        repass: {
            url: '/v6/teacher/repass',
            method: 'post'
        }
    });
 