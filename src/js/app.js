
new Vue({
    el: '#app',
    component:{

    },
    data: {
        message: 'Hello Vue!',
        buttonList: [{key: "freeLogin", value: "免密登录", route: "./template/freelogin",},
            {key: "onlyLogin", value: "账号密码", route: "./"}]
    },
    methods: {
        show: function (type) {
            console.log("that not good idea::", type);
            window.location.href = ("./template/freelogin.html");

            // 跳转使用 a标签或者 window.location.href ---- 不过还没有实验通过
        }
    }
})
