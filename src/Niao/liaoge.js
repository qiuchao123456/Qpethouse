import React from 'react';
import Header from '../Header/header';
import img1 from './../img/57.jpg';
import img2 from './../img/58.png';
import Footer from '../Footer/footer';


var JinmaoxunhuiCss =require('../Gou/jinmaoxunhui.css');

export default class Liaoge extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            鹩哥
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>鹩哥（学名：Gracula religiosa）：是雀形目椋鸟科的鸣禽。体形较大，体重165-258克，体长234-304毫米。全身大致为黑色具紫蓝色和铜绿色金属光泽。特征为头侧具桔黄色肉垂及肉裾，雌雄相似。善鸣，叫声响亮清晰，能模仿和发出多种有旋律的音调。
多成对活动，有时结群。主要栖息于低山丘陵和山脚平原地区的次生林、常绿阔叶林、落叶、阔叶林、竹林和混交林中。常与八哥、椋鸟等合群在果树上觅食。尤常见于林缘及林间小面积的开阔地上，嗜吃野果，兼吃昆虫。繁殖期为2-5月，一年繁殖1-2次。每巢产卵3-4枚，孵卵以雌鸟为主，雄鸟有明显护巢现象。分布于印度、缅甸、泰国、中南半岛和中国。
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
                            ￥1000元
                            <button className={JinmaoxunhuiCss.anniu}>添加到购物车</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}