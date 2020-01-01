import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button,Icon,message} from 'antd';



var RegisterCss = require('./register.css');

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    changeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    upload = () => {
        //XHR
        var xhr = new XMLHttpRequest()
        var data = {
            "uName": this.state.uName,
            "uPwd": this.state.uPwd,
            "uSex": this.state.uSex,
            "uPhone": this.state.uPhone,
            "uEmail": this.state.uEmail,
            "uQQ": this.state.uQQ
        }
        //open连接
        xhr.open("post", "/users/register")
        //配置响应函数
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {//已经接收到数据
                if (xhr.status == 200) {//成功
                    console.log(xhr.responseText)
                    var result = JSON.parse(xhr.responseText)
                    if(result.state==2){
                        message.info("用户已存在")
                        message.info(xhr.responseText)
                        
                    }else if(result.state==1){
                        message.info("注册成功")
                        message.info(xhr.responseText)
                        //this.props.history.push("/honmpage")
                       
                    }  
                } else {
                    console.log(xhr.status)
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
                <div className={RegisterCss.div1}>
                    <div className={RegisterCss.div2}>
                        <div className={RegisterCss.div3}>
                            <div className={RegisterCss.div4}>注册</div>
                            <span>用户名：</span>
                            <Input type="text" name="uName" value={this.state.uName} onChange={e => this.changeValue(e)} />
                            <br />
                            <span>密码：</span>
                            <Input type="password" name="uPwd" value={this.state.uPwd} onChange={e => this.changeValue(e)} />
                            <br />
                            <span>性别：</span>
                            <Input type="gender" name="uSex" value={this.state.uSex} onChange={e => this.changeValue(e)} />
                            <br />
                            <span>电话：</span>
                            <Input type="text" name="uPhone" value={this.state.uPhone} onChange={e => this.changeValue(e)} />
                            <br />
                            <span>邮箱：</span>
                            <Input type="text" name="uEmail" value={this.state.uEmail} onChange={e => this.changeValue(e)} />
                            <br />
                            <span>QQ：</span>
                            <Input type="text" name="uQQ" value={this.state.uQQ} onChange={e => this.changeValue(e)} />
                            <br />
                            <div className={RegisterCss.div5}>
                                <Button type="danger" shape="round" size="large" onClick={this.upload}><p className={RegisterCss.span1}>注册</p></Button>
                                <Link to="/login"><Button type="danger" shape="round" size="large" onClick={this.upload}><p className={RegisterCss.span1}>返回登录</p></Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}