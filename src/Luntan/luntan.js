import React from 'react';
import Header from './../Header/header';
import img1 from './../img/6.jpg';
import img2 from './../img/7.png';
import Footer from './../Footer/footer';


var LuntanCss =require('./luntan.css');

export default class Luntan extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div>
                    <button>注册</button>
                    <input type="text"></input>
                </div>
                <Footer/>
            </div>
        )
    }
}