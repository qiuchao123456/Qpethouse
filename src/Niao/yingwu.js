import React from 'react';
import Header from '../Header/header';
import img1 from './../img/59.png';
import img2 from './../img/60.png';
import Footer from '../Footer/footer';


var JinmaoxunhuiCss =require('../Gou/jinmaoxunhui.css');

export default class Yingwu extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            鹦鹉
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>鹦鹉是鹦形目（学名：Psittaciformes）众多羽毛艳丽、爱叫的鸟。典型的攀禽，对趾型足，两趾向前两趾向后，适合抓握，鸟喙强劲有力，可以食用硬壳果。羽色鲜艳，常被作为宠物饲养。它们以其美丽的羽毛，善学人语技能的特点，更为人们所欣赏和钟爱。鹦鹉中体形最大的当属紫蓝金刚鹦鹉，体长可达100厘米，最小的是蓝冠短尾鹦鹉 ，体长仅有12厘米。
大多数鹦鹉主食树上或者地面上的植物果实、种子、坚果、浆果、嫩芽嫩枝等，兼食少量昆虫。吸蜜鹦鹉类则主食花粉、花蜜及柔软多汁的果实。
鹦鹉类在世界各地都有分布。分布在温、亚热、热带的广大地域。种类非常繁多，有2科、82属、358种，是鸟纲最大的科之一。主要分布于热带森林中。在南半球有些种类扩展到温带地区，也有一些种类分布到遥远的海岛上。鹦鹉在拉丁美洲和大洋洲的种类最多，在非洲和亚洲种类要少得多，但在非洲却有一些很有名的种类，如灰鹦鹉、情侣鹦鹉、牡丹鹦鹉。拉丁美洲的鹦鹉中最著名的是各种大型的金刚鹦鹉。大洋洲的鹦鹉比拉丁美洲更加多样化。
                            </div>
                            <img src={img2}></img>
                        </div>
                    </div>
                    <div className={JinmaoxunhuiCss.div6}>
                        <div className={JinmaoxunhuiCss.div10}>
                            <img src={img1}></img>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>
                        
                        <div className={JinmaoxunhuiCss.div9}>
                            ￥200元
                            <button className={JinmaoxunhuiCss.anniu}>添加到购物车</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}