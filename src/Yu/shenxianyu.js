import React from 'react';
import Header from './../Header/header';
import img1 from './../img/28.jpg';
import img2 from './../img/29.png';
import Footer from './../Footer/footer';


var JinmaoxunhuiCss =require('./../Gou/jinmaoxunhui.css');

export default class Shenxianyu extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            神仙鱼
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>神仙鱼，（学名：Pterophyllum scalare）又名燕鱼、天使鱼、小神仙鱼、小鳍帆鱼等，丽鱼科，天使鱼属，原产南美洲的圭亚那、巴西。神仙鱼背鳍和臀鳍很长并且大，挺拔如三角帆，故有小鳍帆鱼之称。从侧面看神仙鱼游动，如同燕子翱翔，故神仙鱼又称燕鱼。神仙鱼体长12-15厘米，高达15-20厘米，腹鳍演化成触须长如流苏、尾柄短，上下端延长。分为长尾、中尾、短尾，胸鳍无色透明。神仙鱼性格文静、泳姿潇洒、宜混养，被誉为“热带鱼皇后” ，适宜水温26℃-32℃。
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
                            ￥30元
                            <button className={JinmaoxunhuiCss.anniu}>添加到购物车</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}