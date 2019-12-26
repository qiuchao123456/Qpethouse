import React from 'react';
import Header from './../Header/header';
import img1 from './../img/32.jpg';
import img2 from './../img/33.png';
import Footer from './../Footer/footer';


var JinmaoxunhuiCss =require('./../Gou/jinmaoxunhui.css');

export default class Dengyu extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            灯鱼
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>灯鱼最初为一类原产于南美洲亚马逊河流域的小型灯科鱼类，主要为小型加拉辛鱼，近年由于模拟“热带雨林”的水草造景缸而从西欧的荷兰一直热到大陆，作为水草缸和水陆缸的重要主角。灯鱼种类繁多，是热带观赏鱼中数量最多的一种。体形娇小，性情温顺，可能为了抵御其他鱼种的攻击而具有群游、群栖的特性。灯鱼体色绚丽多彩，尤其身上的红光、蓝光或绿光，可以反射出闪烁的光芒，被誉为“会游泳的宝石”。近年来，由于模拟热带雨林的水草造景缸的出现，成百上千的灯鱼群游于水草之间，加上明亮的灯光，更显示出灯鱼异于其他鱼类的美感，成为水草缸中的重要的鱼类。
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