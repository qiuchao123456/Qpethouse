import React from 'react';
import Header from './../Header/header';
import img1 from './../img/40.jpg';
import img2 from './../img/41.png';
import Footer from './../Footer/footer';


var JinmaoxunhuiCss =require('./../Gou/jinmaoxunhui.css');

export default class Ditugui extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            地图龟
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>地图龟具有许多独特的特征，使它不同于在同一地区出没的其他水龟。它们是变化多端的一群龟类，每一类都有着不同的习性，食谱和栖息环境。地图龟，Graptemys，有蒙面地图龟、卡哥地图龟、黄斑地图龟、密西西比地图龟、北部黑瘤地图龟、北部拟地图龟、阿拉巴马地图龟、环纹地图龟、和纹地图龟、德州地图龟等好多品种。分布范围几乎完全位于美国大陆的边界之内，广泛地分布于从佛罗里达到德克萨斯，向北直到Dakotas和魁北克的各种栖息地内
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
                            ￥80元
                            <button className={JinmaoxunhuiCss.anniu}>添加到购物车</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}