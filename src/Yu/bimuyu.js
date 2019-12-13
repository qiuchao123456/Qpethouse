import React from 'react';
import Header from './../Header/header';
import img1 from './../img/34.jpg';
import img2 from './../img/35.png';
import Footer from './../Footer/footer';


var JinmaoxunhuiCss =require('./../Gou/jinmaoxunhui.css');

export default class Bimuyu extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            比目鱼
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>比目鱼是鲽形目鱼类的统称。无鳔，以蠕虫、甲壳类等动物为食。在生物分类学上属辐鳍鱼纲，鲽形目。比目鱼具有扁平的身体，眼睛只生长在身体的一侧，具有鱼类中独一无二的不对称结构。
比目鱼被认为是从一种习惯单侧休息的基本对称的鲈形鱼（海鲈鱼）进化而来的。世界上大约有570种比目鱼，可以划分为11个科。比目鱼中最原始的科是鳒科，具有非常类似于鲈鱼的胸鳍与臀鳍，只有眼睛和长长的背鳍和海鲈鱼有所差异，这说明比目鱼是从鲈形目祖先进化而来的。
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
                            ￥100元
                            <button className={JinmaoxunhuiCss.anniu}>添加到购物车</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}