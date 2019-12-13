import React from 'react';
import Header from './../Header/header';
import img1 from './../img/42.jpg';
import img2 from './../img/43.png';
import Footer from './../Footer/footer';


var JinmaoxunhuiCss =require('./../Gou/jinmaoxunhui.css');

export default class Zhonghuagui extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            中华龟
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>中华龟产地：华东、中南、西南以及陕西、甘肃、青海、日本、朝鲜。体长：8-17cm。大多数龟均为肉食性，以蠕虫、螺类、虾及小鱼等为食，亦食植物的茎叶。中华龟就是中华草龟。栖息于江湖。中华龟属半水栖、半陆栖性爬行动物。主要栖息于江河、湖泊、水库、池塘及其它水域。白天多陷居水中，夏日炎热时，便成群地寻找荫凉处。性情温和，相互间无咬斗。遇到敌害或受惊吓时，便把头、四肢和尾缩入壳内。中华龟是杂食性动物，以动物性的昆虫、蠕虫、小鱼、虾、螺、蚌、植物性的嫩叶、浮萍、瓜皮、麦粒、稻谷、杂草种子等为食。耐饥饿能力强，数月不食也不致饿死。
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
                            ￥40元
                            <button className={JinmaoxunhuiCss.anniu}>添加到购物车</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}