window.pageTools = window.pageTools || {};
(function () {
    class Login {
        constructor(isLogin, selector, fn) {
            this.isLogin = isLogin;
            this.selector = $(selector);
            this.init();
            this.fn = fn;
        }
        init() {
            var isShow = this.isLogin ? "none" : "block";
            var buttonText = this.isLogin ? "登录" : "注册";
            //添加对话框DOM
            this.dialog = $(
                `<div class="dialog">
                    <button class="close-btn">&times;</button>
                    <div class="input-box">
                        <input type="text" placeholder="用户名">
                        <input type="password" placeholder="密码">
                        <input type="password" placeholder="确认密码" class="again-pwd">
                        <button class="btn"></button>
                    </div>
                </div>`);
            this.selector.append(this.dialog)
            //如果是登录则不显示确认密码框，
            $('.again-pwd').css('display', isShow);
            $(".btn").text(buttonText).on('click', function () {
                this.dialog.remove(); //清除dialog这个div中所有内容，包括自身
                this.dialog = null;//垃圾回收处理
                this.eventListiner();
            }.bind(this));
            //单击“关闭”按钮时，清除上面创建的对话框DOM
            $(".close-btn").on('click', function () {
                this.dialog.remove();
                this.dialog = null;
                this.eventListener();
            }.bind(this));
        }
    }
    pageTools.Login = Login
})();
