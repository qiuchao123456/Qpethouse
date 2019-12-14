import React from 'react';
import Header from '../Header/header';
import img1 from './../img/61.jpg';
import img2 from './../img/62.png';
import Footer from '../Footer/footer';


var JinmaoxunhuiCss =require('../Gou/jinmaoxunhui.css');

export default class Daisheng extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            戴胜
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>戴胜（学名：Upupa epops）：共有8个亚种。依不同亚种体长26-28厘米，翼展42-46厘米，体重55-80克。头顶羽冠长而阔，呈扇形。颜包为棕红色或沙粉红色，具黑色端斑和白色次端斑。头侧和后颈淡棕色，上背和肩灰棕色。下背黑色而杂有淡棕白色宽阔横斑。初级飞羽黑色，飞羽中部具一道宽阔的白色横斑，其余飞羽具多道白色横斑。翅上覆羽黑色，也具较宽的白色或棕白色横斑。腰白色，尾羽黑色而中部具一白色横斑。颏、喉和上胸葡萄棕色。腹白色而杂有褐色纵纹。虹膜暗褐色。嘴细长而向下弯曲，黑色，基部淡肉色，脚和趾铅色或褐色。
栖息于山地、平原、森林、林缘、路边、河谷、农田、草地、村屯和果园等开阔地方，尤其以林缘耕地生境较为常见。以虫类为食，在树上的洞内做窝。性活泼，喜开阔潮湿地面，长长的嘴在地面翻动寻找食物。有警情时冠羽立起，起飞后松懈下来。每年5、6月份繁殖，选择天然树洞和啄木鸟凿空的蛀树孔里营巢产卵，有时也建窝在岩石缝隙、堤岸洼坑、断墙残垣的窟窿中。每窝产卵5-9枚。主要分布在欧洲、亚洲和北非地区，在中国有广泛分布。戴胜鸟是以色列国鸟，《那年那兔那些事》里的戴胜鸟即代指以色列。
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