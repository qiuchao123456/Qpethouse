import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button,message} from 'antd';
import {withRouter} from "react-router-dom";

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
            "uName": this.state.uName,
            "uPwd": this.state.uPwd
        }
        //open连接
        xhr.open("post", "/users/login")
        //配置响应函数
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {//已经接收到数据
                if (xhr.status == 200) {//成功
                    console.log(xhr.responseText)
                    var result = JSON.parse(xhr.responseText)
                    if(result.state==2){
                        message.info("用户名或密码错误！")
                        message.info(xhr.responseText)   
                    }else if(result.state==1){
                        message.info("登录成功")
                        message.info(xhr.responseText)
                        //this.props.history.push("/homepage");
                    }  
                } else {
                }
            }
        }
        //发送数据
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(JSON.stringify(data))
    }
    render() {
        return (
            <div>
                <div className={LoginCss.div1}>
                    <div className={LoginCss.div2}>
                        <div className={LoginCss.div3}>
                            <div className={LoginCss.div4}>登录</div>
                            <span>用户名：</span>
                            <Input type="text" name="uName" value={this.state.uName} onChange={e => this.changeValue(e)} />
                            <br />
                            <span>密码：</span>
                            <Input type="password" name="uPwd" value={this.state.uPwd} onChange={e => this.changeValue(e)} />
                            <br />
                            <div className={LoginCss.div5}>
                            <Button type="danger" shape="round" size="large" onClick={this.upload}>登录</Button>
                            </div>
                            <br />
                            <div>
                                <div><p className={LoginCss.div6}>没有账号？请点击  <Link to="/register"><span className={LoginCss.span1}>注册</span></Link></p></div>
                                <div><p className={LoginCss.div6}>如果你是管理员？请点击  <Link to="/adminlogin"><span className={LoginCss.span1}>登录</span></Link></p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}