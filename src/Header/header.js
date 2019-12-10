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
                    <Link to=""><ul className={HeaderCss.ul1}>首页</ul></Link>
                    <ul className={HeaderCss.ul1}>我的购物车</ul>
                    <ul className={HeaderCss.ul1}>关于我们</ul>
                    <ul className={HeaderCss.ul1}>论坛</ul>
                    <ul className={HeaderCss.ul1}>动物分类</ul>
                    <ul className={HeaderCss.ul1}>登录/注册</ul>
                    
                </div>
            </div>
           
        )
    }
}