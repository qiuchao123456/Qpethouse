import React from 'react';
import Header from './../Header/header';
import img1 from './../img/30.jpg';
import img2 from './../img/31.png';
import Footer from './../Footer/footer';


var JinmaoxunhuiCss =require('./../Gou/jinmaoxunhui.css');

export default class Haishuiyu extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            海水鱼
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>海水鱼主要是指产自热带地区的海鱼，它们色彩特别艳丽，形状奇特，是观赏鱼产业未来的发展方向。人工饲养需要一定方法和技巧。海水鱼是生活在海洋中的鱼，因此，我们要饲养它，必须要有相关的设备，采取相关的措施，来摸拟大洋中的生活环境。温度应控制在25℃左右，盐度1·020%～1·023%之间，并需摆上海里的动植物。如珊瑚、海葵、海蟹、海草等。只有这样，海水鱼才肯高高兴兴地在这里安居乐业，继续生活下去。
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
                            ￥40元
                            <button className={JinmaoxunhuiCss.anniu}>添加到购物车</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}