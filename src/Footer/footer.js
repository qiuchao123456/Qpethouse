import React from 'react';
import Img from './../img/2.jpg';

var FooterCss = require('./footer.css');
export default class Footer extends React.Component{
    render(){
        return(
            <div className={FooterCss.footer}>
                    <div className={FooterCss.div2}>
                        <img src={Img} className={FooterCss.img}/>  
                    </div>
                    <div className={FooterCss.div3}>
                        <ul className={FooterCss.ul1}>
                            <span>服务条款||</span>
                            <span>客服||</span>
                            <span>游客隐私保护指引||</span>
                            <span>商务合作||</span>
                            <span>网站导航</span>
                            <br/>
                            <span>宠物之家版权所有</span>
                            <br/>
                            <span>COPYRIGHT © 1998 - 2019 TENCENT. ALL RIGHTS RESERVED.</span>
                            <br/>
                            <span>COPYRIGHT © 2012 Riot Games,Inc. ALL RIGHTS RESERVED.</span>
                            <br/>
                            批准文号：新出审字[2011]310号||文网进字[2011] 004号||全国文化市场统一举报电话：12318
                        </ul>
                    </div>
            </div>
        )
    }
}