import React from 'react';
import Header from '../Header/header';
import img1 from './../img/63.jpg';
import img2 from './../img/64.png';
import Footer from '../Footer/footer';


var JinmaoxunhuiCss =require('../Gou/jinmaoxunhui.css');

export default class Jiaobailing extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            角百灵
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>角百灵（学名：Eremophila alpestris）：是一种小型鸣禽和中等体型的深色百灵，共有42个亚种。体长15-17厘米，翼展31-35厘米，体重33-45克。上体棕褐色至灰褐色，前额白色，顶部红褐色，在额部与顶部之间具宽阔的黑色带纹，带纹的后两侧，有黑色羽毛突起于头后如角。颊部白色并具有黑色宽阔胸带，尾暗褐色，但外侧1对尾羽白色，后爪长而稍弯曲。
栖息于干旱山地、荒漠、草地或岩石上。非繁殖期多结群生活，常作短距离低飞或奔跑，取食昆虫和草籽。繁殖期5-8月，每窝产卵2-5枚。分布于美洲、印度次大陆及中国的西南地区。
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
                            ￥150元
                            <button className={JinmaoxunhuiCss.anniu}>添加到购物车</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}