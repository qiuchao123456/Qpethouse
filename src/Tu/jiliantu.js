import React from 'react';
import Header from '../Header/header';
import img1 from './../img/53.jpg';
import img2 from './../img/54.png';
import Footer from '../Footer/footer';


var JinmaoxunhuiCss =require('../Gou/jinmaoxunhui.css');

export default class Jiliantu extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            忌廉兔
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>忌廉兔源自法国，在1934年被带到美国去培育。是草食性动物。体形特征：体重：3.8-5kg 毛长得很浓密，除了肚子的毛是奶白色外，身体其它部份都长有很漂亮的橙银色毛发，口鼻部份会较深色，但长大后会变浅，而眼睛则是咖啡色的。忌廉兔的体重大约四到五公斤左右，比起香槟兔，忌廉兔体型较为小；眼睛为咖啡色，身躯为中等长，四肢及肩膀肌肉发达，毛色为银橘色，底毛为亮橘色，外层毛为橘色斑文且带点银白色，腹部为奶油色，口鼻处的被毛颜色较深，长大后会逐渐变浅。
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
                            ￥800元
                            <button className={JinmaoxunhuiCss.anniu}>添加到购物车</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}