import React from "react";
import img1 from './../img/2.jpg'
import img2 from './../img/3.jpg'
import img3 from './../img/4.jpg'
import img4 from './../img/5.jpg'

var LunBoTuCss = require('./lunbotu.css')

export default class LunBoTu extends React.Component{
    render(){
        window.onload = function () {
            var broadcast = document.getElementById("broadcast"),
                img_list = document.getElementById("img_list"),
                button_list = document.getElementById("button_list").getElementsByTagName("li"),
                index = 0,
                timer = null;
                //初始化
                if (timer) {
                    clearInterval(timer);
                    timer = null;
                }
           
                // 自动切换
                timer = setInterval(autoPlay, 1000);
           
                // 调用自动播放函数
                function autoPlay() {
                    index++;
                    if (index >= button_list.length) {
                        index = 0;
                    }
                    imgChange(index);
                }
            
            function imgChange(buttonIndex) {
                for (let i = 0; i < button_list.length; i++) {
                    button_list[i].className="";
                }
                button_list[buttonIndex].className = "first-li";//按钮样式切换
                img_list.style.marginLeft = -1000 * buttonIndex + "px";
                index = buttonIndex;
            }
            //鼠标接触div
            broadcast.onmouseover = function(){
                clearInterval(timer);
        
            }
            //鼠标离开div
            broadcast.onmouseout = function(){
                timer = setInterval(autoPlay, 2000);
            }
            //鼠标悬停ol
            for (var i = 0; i < button_list.length; i++) {
                button_list[i].id = i;
                button_list[i].onmouseover = function() {
                    clearInterval(timer);
                    imgChange(this.id);
                }
            }
        }
        return(
            <div className={LunBoTuCss.divbox}>
                <div className={LunBoTuCss.wrap}>
                    <div className={LunBoTuCss.broadcast} id="broadcast">
                        <ul id="img_list">
                            <li><img src={img1} alt=""></img></li>
                            <li><img src={img2} alt=""></img></li>
                            <li><img src={img3} alt=""></img></li>
                            <li><img src={img4} alt=""></img></li>
                        </ul>
                        <ol id="button_list">
                            <li id="olli1">1</li>
                            <li id="olli2">2</li>
                            <li id="olli3">3</li>
                            <li id="olli4">4</li>
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}
