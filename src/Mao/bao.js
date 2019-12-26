import React from 'react';
import Header from './../Header/header';
import img1 from './../img/20.jpg';
import img2 from './../img/21.png';
import Footer from './../Footer/footer';


var JinmaoxunhuiCss =require('./../Gou/jinmaoxunhui.css');

export default class Bao extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            豹猫
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>豹猫（学名：Prionailurus bengalensis）：是产于亚洲的猫科动物。豹猫的体型与家猫大致相仿，但各亚种的差别比较大，例如印度尼西亚的亚种平均体长45厘米，尾长20厘米，而西伯利亚的亚种体长则达到60厘米，尾长40厘米。豹猫的毛皮也有很多种颜色：南方的豹猫为黄色，北方的则为银灰色。胸部及腹部是白色。豹猫的斑点一般为黑色。
豹猫是夜行动物，通常以啮齿类、鸟类、鱼类、爬行类及小型哺乳动物为食。除了交配季节外，它们一般为独处。
由于人类的猎杀失去栖息地，豹猫被世界自然保护联盟列成易危物种。
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