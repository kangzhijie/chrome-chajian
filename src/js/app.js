// app.js

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        buttonList: {freeLogin: "免密登录", onlyLogin: "账号密码"}
    },
    methods: {
        show: function (type) {
            console.log("that not good idea::", type)
        }
    }
})