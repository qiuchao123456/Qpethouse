import React from 'react';
import Header from './../Header/header';
import Footer from './../Footer/footer';
import { Input} from 'antd';
import img1 from '../img/77.png';

var LuntanCss =require('./luntan.css');

export default class Luntan extends React.Component{
    render(){
        window.onload=function(){
            var input =document.getElementsByTagName("Input")[0];
			input.onclick=function(){
                var neirong=prompt("请输入内容");
                if(neirong!=null && neirong!=""){
                    var li=document.createElement("li");
                    li.innerText=neirong;
                    var ol=document.getElementsByTagName("ol")[0];
                    ol.appendChild(li);
                }
            }
        }
        return(
            <div>
                <Header/>
                <div className={LuntanCss.div1}>
                    <div className={LuntanCss.div2}>
                        宠物大论坛
                    </div>
                    <div className={LuntanCss.div4}>
                        <img src={img1}></img>
                    </div>
                    <div className={LuntanCss.div3}>
                        <ol>
                            <li>听说鹦鹉会学人说话，我也想买一只鹦鹉来养着。</li>
                            <li>猫真的有九条命嘛？不知道是真是假。</li>
                            <li>我家的狗狗最近喜欢咬我的手，该怎么办呢？</li>
                            <li>乌龟的寿命是所有动物当中最长的吗？要是我能长命百岁该多好啊。</li>
                            <li>猫头鹰为什么晚上精神那么好，白天却在睡觉呢？</li>
                        </ol>
                        <Input type="text" value="请输入内容"></Input>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}