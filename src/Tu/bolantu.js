import React from 'react';
import Header from '../Header/header';
import img1 from './../img/50.png';
import img2 from './../img/51.png';
import Footer from '../Footer/footer';


var JinmaoxunhuiCss =require('./../Gou/jinmaoxunhui.css');

export default class Bolantu extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            波兰兔
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>体形特征 体重：小于1.6kg 是纯种兔中最娇小的，身圆头短，两只耳朵竖起及靠在一起，长度不过7.6cm，毛短及浓密。
草食，比如红豆幼叶，大豆幼叶，小草幼叶，等等。一般饲养的兔子要注意食物的提供，因为幼兔没有饱感，所以食物要适量提供。蔬菜本来是不建议给幼兔吃的，容易得肠炎，成年后才可以适当提供。兔子分成兔和幼兔。它们都是早晚喂食，每天2次。幼兔是1～5个月的兔子，成兔是5个月以上的兔子。
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
                            ￥500元
                            <button className={JinmaoxunhuiCss.anniu}>添加到购物车</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}