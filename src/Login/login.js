import React from 'react';
import {Link} from 'react-router-dom';



// var HanderCss =require('./hander.css');

export default class Login extends React.Component{
    render(){
        return(
            <div>
                用户名：
                <input type="text" maxLength="50"/>
                密码：
                <input type="password"/>
                <div>
                    <div>没有账号？请点击<Link to="/register"><span>注册</span></Link></div>
                </div>
            </div>
           
        )
    }
}