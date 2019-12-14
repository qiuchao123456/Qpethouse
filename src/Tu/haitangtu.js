import React from 'react';
import Header from '../Header/header';
import img1 from './../img/48.jpg';
import img2 from './../img/49.png';
import Footer from '../Footer/footer';


var JinmaoxunhuiCss =require('../Gou/jinmaoxunhui.css');

export default class Haitangtu extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            海棠兔
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>海棠兔俗称荷达特兔 、熊猫兔，产于法国，几乎是完全的草食动物。熊猫兔也叫海棠兔、荷达特兔，熊猫兔的饲养与其它宠物兔的饲养基本一样。
食物，兔子几乎是完全的草食动物。非常喜爱吃胡萝卜、土豆、萝卜叶等蔬菜，以及蒲公英、车前草等。日本市场最近推出给兔子食用的颗粒状人工饲料，具有营养均衡、硬度对牙齿有益等优点，未来可以人工饲料为主食，再提供少许的蔬菜或野草即可。
至今仍有人相信"让兔子喝水立刻会死亡"的迷信，甚至宠物店也会告诉饲主，最好不要喂食饮水。但兔子和其他动物一样，若不不饮水一定会死亡。 但是由于以前喂食的是含有大量水分的蔬菜、野草，这些食物中所含的水分即足够所需；若喂食过多的水分。会影响肠胃的健康，造成下痢，湿漉漉的笼子易使兔子生病，这就是说兔子不能喝水的原因，若以干燥的工人饲料为主食，当然就需要喝水了。只是对于三个月左右的兔子来说，水不应当太多，即使是以人工饲料为主食也应当合适。不然兔子拉稀了就很难处理，得喂药。万一兔子不听话还得哄。
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