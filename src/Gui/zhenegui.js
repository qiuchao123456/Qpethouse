import React from 'react';
import Header from './../Header/header';
import img1 from './../img/38.jpg';
import img2 from './../img/39.png';
import Footer from './../Footer/footer';


var JinmaoxunhuiCss =require('./../Gou/jinmaoxunhui.css');

export default class Zhenegui extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            真鳄龟
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>真鳄龟，拉丁学名：Macroclemys temminckii。在中国宠物市场上被称为大鳄龟，以区别同科的另一种龟类--鳄龟，生存能力强适应强。同时，是世界上最大的水龟之一。由于人类大量捕杀，目前正濒临灭绝。大鳄龟体型巨大，成年龟甲长0.4-0.7米，体重45-75公斤，最大的可达107公斤，身长在0.75-0.9米，雄性比雌性大。这种大鳄龟看起来像是一只披甲恐龙。在它们的舌头上，长有蠕虫形状的附属肢体，可以用来吸引鱼类自动游向它们的嘴中。真鳄龟保持了原始龟的特征，嘴巴、背甲盾片、红舌都很奇特。嘴巴前端的上下颌呈钩状，似老鹰嘴一般，锋利无比，可咬断人的手指。真鳄龟体大，背甲长达约31英寸，体重可达200磅。
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
                            ￥400元
                            <button className={JinmaoxunhuiCss.anniu}>添加到购物车</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}