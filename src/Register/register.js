import React from 'react';
import {Link} from 'react-router-dom';



// var HanderCss =require('./hander.css');

export default class Login extends React.Component{
    render(){
        return(
            <div>
                用户名：
                <input type=""/>
                密码：
                <input type=""/>
                <div>
                    <div>没有账号？请点击<span>注册</span></div>
                </div>
            </div>
           
        )
    }
}