import React from 'react';
import Header from './../Header/header';
import img1 from './../img/14.jpg';
import img2 from './../img/15.png';
import Footer from './../Footer/footer';


var JinmaoxunhuiCss =require('./jinmaoxunhui.css');

export default class Jiwawa extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            吉娃娃
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>吉娃娃从墨西哥传到美国后到1898年的历史至今不清。有人确定此犬原产于南美，初期被印加族人视为神圣的犬种，后来传到阿斯提克族。也有人认为此犬是随西班牙的侵略者到达新世界的品种，或者在19世纪初期，从中国传入的。以上各种判断，可以说明此犬绝非源自一种品种，而是自古以来就是由多种品种交配而来的。1923年成立吉娃娃犬俱乐部，它是美国最受欢迎的12个品种犬之一。英国吉娃娃犬俱乐部建立于1949年，是世界上最小的犬。1923年成立吉娃娃犬俱乐部，它是美国最受欢迎的12个品种犬之一。有淡黄褐色、蓝色、巧克力色、黑色、黑黄褐色、红色、棕色等，有的单色的吉娃娃犬还有斑点。
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
                            ￥1500元
                            <button className={JinmaoxunhuiCss.anniu}>添加到购物车</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}