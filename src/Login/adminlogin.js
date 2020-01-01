import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, message } from 'antd';
import { withRouter } from "react-router-dom";

var AdminloginCss = require('./adminlogin.css');

export default class Adminlogin extends React.Component {
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
            "aName": this.state.aName,
            "aPwd": this.state.aPwd
        }
        //open连接
        xhr.open("post", "/adminusers/adminlogin")
        //配置响应函数
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {//已经接收到数据
                if (xhr.status == 200) {//成功
                    console.log(xhr.responseText)
                    var result = JSON.parse(xhr.responseText)
                    if (result.state == 2) {
                        message.info("该用户不是管理员！")
                        message.info(xhr.responseText)
                    } else if (result.state == 1) {
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
                <div className={AdminloginCss.div1}>
                    <div className={AdminloginCss.div2}>
                        <div className={AdminloginCss.div3}>
                            <div className={AdminloginCss.div4}>管理员登录</div>
                            <span>用户名：</span>
                            <Input type="text" name="aName" value={this.state.aName} onChange={e => this.changeValue(e)} />
                            <br />
                            <span>密码：</span>
                            <Input type="password" name="aPwd" value={this.state.aPwd} onChange={e => this.changeValue(e)} />
                            <br />
                            <div className={AdminloginCss.div5}>
                                <Button type="danger" shape="round" size="large" onClick={this.upload}>登录</Button>
                                <Link to="/login"><Button type="danger" shape="round" size="large">《返回上级</Button></Link>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}