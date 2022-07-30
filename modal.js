/**
 * Author:01
 * QQ:24130801
 * Date:2022/05/15
 */

 window.onload = function () {
    const url = window.location.href;
    console.log("你的url:" + url)
    var UA = navigator.userAgent.match(/Windows|Windows NT 10.0|X11|Macintosh|iPhone|iPad|Linux|Android/i);
    var w = document.documentElement.offsetWidth || document.body.offsetWidth;

    var judgeUA = null;

    if (UA[0] == "Windows" || UA[0] == "X11" || UA[0] == "Macintosh") {
        // PC端
        judgeUA = 1
    } else if (UA[0] == "iPhone" || UA[0] == "iPad" || UA[0] == "Linux" || UA[0] == "Android") {
        // 移动端
        judgeUA = 0
    }
    // if (judgeUA == 0 && w <= 450) {
    if (judgeUA == 0 && url == "https://pan.ylmty.cc/" && w <= 450) {
        // url填自己的网站域名加http(s),请复制控制台输出的那一串填入这里，注意结束的/有就一起复制，没有就不加
        // console.log("移动端："+w)
        var div = document.createElement("div");
        div.setAttribute("id", "fuck");
        div.style.cssText =
            "position: fixed; left: 0; top: 0; width: 100%; height: 100%; box-sizing: border-box; padding: 18px; line-height: 2em; background-color: rgba(19,44,51,.9); z-index: 99999; display: flex; justify-content: center; align-items: center;";
        div.innerHTML =
            "" +
            '<div style="color: #c94e50; background: rgba(255,254,249) ;padding:25px;border-radius:4px;">' +
            "<h1 style= 'text-align:center;font-size:18px;'><strong>注意</strong></h1>" +
            "<p style= 'text-align:center;margin-top:20px'>使用手机客户端可能会导致视频失效</p>" +
            "<p style='text-align: center; margin-top:50px;margin-bottom:6px;' ><button style=\" width: 150px; border-radius:4px; background-color: #c94e50; color: rgba(255,254,249); border: none; height: 3em;\" onclick=\"document.body.removeChild(document.getElementById('fuck'));\">劳资晓得了</button></p>" +
            '<p style="text-align: center; color:#bdc0ba;font-size:14px">视频推荐电脑端使用</p>' +
            "</div>";
        document.body.append(div);
    }
    // if (judgeUA == 1 && w >= 450) {
    if (judgeUA == 1 && url == "https://pan.ylmty.cc/" && w >= 450) {
        // url填自己的网站域名加http(s)
        // console.log("PC端："+w)
        var div = document.createElement("div");
        div.setAttribute("id", "shit");
        div.innerHTML =
            '<div ref="app" class="container" v-show="isShow" id="app">' +
            '<div class="popup-inner">' +
            '<div class="popup__photo">' +
            '<img :src="imgUrl" alt="图片丢失了">' +
            '</div>' +
            '<div class="popup__text">' +
            '<h1>{{ titleText }}</h1>' +
            // '<img src="{{ headImg }}">'+
            '<p>{{ noticeText }}</p>' +
            '</div>' +
            '<a @click="closeModal()"></a>' +
            '</div>' +
            '<a href="https://msg-lbo.github.io/alist-Modal/" id="text">{{ blText }}</a>' +
            '</div>';
        document.body.append(div);
        new Vue({
            el: "#app",
            data: {
                isShow: true,
                imgUrl: "https://pan.ylmty.cc/d/local%F0%9F%94%92/img/300x600.jpg",
                headImg: "./headImg.jpg",
                titleText: "-网盘须知-",
                noticeText: "网盘内东西可以随意下载，部分文件夹开放上传权限，请勿上传违法的东西，聊天室如无法正常打开，请尝试挂梯子，(垃圾JSD)",
                blText: "MoadlStyle by：ylmty"
            },
            methods: {
                closeModal() {
                    app = this.$refs.app;
                    app.parentNode.removeChild(app);
                }
            },
        })
    }

}
