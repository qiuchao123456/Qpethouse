import React from 'react';
import Header from '../Header/header';
import img1 from './../img/52.png';
import img2 from './../img/51.png';
import Footer from '../Footer/footer';


var JinmaoxunhuiCss =require('../Gou/jinmaoxunhui.css');

export default class Daerbaitu extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            大耳白兔
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>英 文 名: Japanese White Rabbit 俗名别名: 日本大耳白兔、日本白兔、大耳兔 英 文 名: Japanese White Rabbit 原 产 地: 日本 繁殖方式: 胎生。毛色纯白，红眼睛，体型较大。两耳长大高举，耳根细，耳端尖，形同柳叶，田兔颌下具肉髯，被毛浓密。大耳白兔生长发育快，繁殖力较强，但抗病力较差
为探讨不同生理发育时期日本大耳白兔红细胞免疫功能的变化规律,应用红细胞C3b受体花环(E-C3bRR)和红细胞免疫复合物花环(E-ICRR)试验以及红细胞免疫粘附调节因子活性测定试验,对不同生理发育期日本大耳白兔红细胞免疫学进行了研究。结果显示:随着年龄的增长,日本大耳白兔的红细胞C3b受体花环(E-C3bRR)和红细胞免疫粘附促进因子(RFER)显著降低,而红细胞免疫复合物花环(E-ICRR)和红细胞免疫粘附抑制因子(RFIR)显著升高。日本大耳白兔红细胞E-C3bRR和RFER与年龄呈显著负相关,而E-ICRR和RFIR与年龄呈显著正相关。
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
                            ￥300元
                            <button className={JinmaoxunhuiCss.anniu}>添加到购物车</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}