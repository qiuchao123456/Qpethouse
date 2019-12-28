import React from 'react';
import Header from './../Header/header';
import img1 from './../img/6.jpg';
import img2 from './../img/7.png';
import Footer from './../Footer/footer';
import {Button, Input} from 'antd';

var LuntanCss =require('./luntan.css');

export default class Luntan extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div>
                    <Button type="defalut" loading>按钮</Button>
                    <Input type="text"></Input>
                </div>
                <Footer/>
            </div>
        )
    }
}