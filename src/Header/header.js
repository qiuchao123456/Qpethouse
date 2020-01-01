import React from 'react';
import {Link} from 'react-router-dom';
import img1 from './../img/1.png'


var HeaderCss =require('./header.css');

export default class Header extends React.Component{
    render(){
        return(
            <div className={HeaderCss.div1}>
                <div className={HeaderCss.div2}>
                    <img src={img1}></img>
                </div>
                <div className={HeaderCss.div3}>
                    <Link to="/homepage"><ul className={HeaderCss.ul1}>首页</ul></Link>
                    <ul className={HeaderCss.ul1}>我的购物车</ul>
                    <Link to="/collection"><ul className={HeaderCss.ul1}>我的收藏</ul></Link>
                    <Link to="/fenlei"><ul className={HeaderCss.ul1}>动物分类</ul></Link>
                    <Link to="/luntan"><ul className={HeaderCss.ul1}>动物论坛</ul></Link>
                    <Link to="/login" className={HeaderCss.ul1}>登录</Link>
                    <Link to="/register" className={HeaderCss.ul1}>注册</Link>
                </div>
                <Link to="/guanliduan" className={HeaderCss.guanliyuan}>管理端</Link>
                <div className={HeaderCss.clearfix}></div>
            </div>
        )
    }
}