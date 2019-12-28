import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, message } from 'antd';



var LoginCss = require('./login.css');

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    changeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    upload = () => {
        //XHR
        var xhr = new XMLHttpRequest()
        var data = {
            "username": this.state.username,
            "password": this.state.password
        }
        //open连接
        xhr.open("post", "/user/login")
        //配置响应函数
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {//已经接收到数据
                if (xhr.status == 200) {//成功
                    console.log(xhr.responseText)
                } else {
                }
            }
        }
        //发送数据
        xhr.send(data)
    }
    render() {
        return (
            <div>
                <div className={LoginCss.div1}>
                    <div className={LoginCss.div2}>
                        <div className={LoginCss.div3}>
                            <div className={LoginCss.div4}>登录</div>
                            <span>用户名：</span>
                            <Input type="text" name="username" value={this.state.username} onChange={e => this.changeValue(e)} />
                            <br />
                            <span>密码：</span>
                            <Input type="password" name="password" value={this.state.password} onChange={e => this.changeValue(e)} />
                            <br />
                            <div className={LoginCss.div5}>
                            <Button type="danger" shape="round" size="large" onClick={this.upload}>登录</Button>
                            </div>
                            <br />
                            <div>
                                <div><p className={LoginCss.div6}>没有账号？请点击  <Link to="/register"><span className={LoginCss.span1}>注册</span></Link></p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}