import React from 'react';
import Header from './../Header/header';
import img1 from './../img/46.jpg';
import img2 from './../img/47.png';
import Footer from './../Footer/footer';


var JinmaoxunhuiCss =require('./../Gou/jinmaoxunhui.css');

export default class Helanchuiertu extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            荷兰垂耳兔
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>天生性情温驯，毛色有纯色、刺鼠色 、杂色、 铜铁色、橙色宽条纹等。 荷兰垂耳兔的体重大约2～2.5公斤，最恰当的体重大约是1.4公斤。爱干燥，胆小怕惊，喜欢安静，耐寒怕热，昼伏夜行，喜欢穴居，同性好斗。
垂耳兔根据外貌特征可分为标准与非标准型。荷兰垂耳兔据悉是由荷兰的Adrian De Cock先生发展出来的。荷兰垂耳兔在1949年，他以迷你兔（侏儒兔）与英国垂耳兔所生的后代，与法国垂耳兔交配，尝试生产缩小版的法国垂耳兔，因此它诞生的年代，比起法国垂耳兔、英国垂耳兔晚了许多。一般所说的迷你兔，则是1970年代发展出来的。
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