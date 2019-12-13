import React from 'react';
import Header from './../Header/header';
import img1 from './../img/26.jpg';
import img2 from './../img/27.png';
import Footer from './../Footer/footer';


var JinmaoxunhuiCss =require('./../Gou/jinmaoxunhui.css');

export default class Jinyu extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            金鱼
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>金鱼(Carassiusauratus)又称金鲫鱼。鲤科鱼类，是由野生红黄色鲫鱼演化而来。远在晋朝就有“赤鳞鱼”—金鱼的文字记载，堪称中国的国粹。金鱼是世界著名三大观赏鱼类之一，发源于中国，至今已有1700多年历史。金鱼在我国观赏鱼出口贸易中占有十分重要的地位。金鱼体态优美、品种繁多，其体色有红、黄、蓝、紫、黑、白、双色、三色、五花色等，其体形有狮头、高头、水泡、龙睛、绒球、珍珠鳞、蝶尾、虎头等。
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
                            ￥5元
                            <button className={JinmaoxunhuiCss.anniu}>添加到购物车</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}