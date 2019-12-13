import React from 'react';
import Header from './../Header/header';
import img1 from './../img/44.jpg';
import img2 from './../img/45.png';
import Footer from './../Footer/footer';


var JinmaoxunhuiCss =require('./../Gou/jinmaoxunhui.css');

export default class Hongtuilugui extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            红腿陆龟
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>红腿陆龟(学名：Geochelone carbonaria)，陆龟科。体长30公分左右，最大可达45公分。颜色鲜艳夺目。容易饲养，食量大，是饲养陆龟初学者的理想选择。红腿陆龟有两个亚种，即哥伦比亚红腿（俗称老版红腿）以及加勒比海岛屿红腿（俗称樱桃红腿）。老版红腿个体较大，头部无明显斑纹，但背甲长到一定程度之后中部会有向里测凹陷（俗称：葫芦腰）。樱桃红腿体型较小，头部有明显红色斑纹，长大后背甲不会收缩，依旧成椭圆形。红腿陆龟，学名（Geochelone carbonaria），英文名（Red—footed Tortoise），隶属陆龟科（Testudinidae）土陆龟属（Geochelone），是产于巴西、巴拿马、哥伦比亚、委内瑞拉、阿根廷等南美洲国家的小型陆龟，因四肢呈红色，故得名红腿陆龟。红腿陆龟是八大陆龟之一，是少数极为聪明、互动性很高的龟，并且能在极短的时间内长大，很适合饲养，也很适合作为新手入门的饲养龟种。
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