import React from 'react';
import Header from './../Header/header';
import img1 from './../img/36.jpg';
import img2 from './../img/37.png';
import Footer from './../Footer/footer';


var JinmaoxunhuiCss =require('./../Gou/jinmaoxunhui.css');

export default class Jinqiangun extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            金钱龟
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>金钱龟的学名为三线闭壳龟(Cuora trifasciata)，别名红边龟、红肚龟、断板龟、金头龟等.隶属于龟鳖目(Testudines)、龟科(Emydidae)、淡水龟亚科(Batagurinae)、闭壳龟属(Cuora)。主要分布于我国的广东、广西、海南、福建、香港等省区及越南、老挝等东南亚国家，为我国的二级保护动物。金钱龟是珍贵的动物资源，浑身都是宝，在药用、观赏、工艺制作、食用以及现代科学研究等方面都具有重要的意义和经济价值。人们对金钱龟的需求不断增加，但在自然界中，金钱龟由于其繁殖数量低，加上遭到人们的狂捕滥杀，其种群数量日益下降, 在野外已难觅其踪。
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