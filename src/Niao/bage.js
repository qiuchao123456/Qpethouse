import React from 'react';
import Header from '../Header/header';
import img1 from './../img/55.jpg';
import img2 from './../img/56.png';
import Footer from '../Footer/footer';


var JinmaoxunhuiCss =require('../Gou/jinmaoxunhui.css');

export default class Bage extends React.Component{
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            八哥
                            <button className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>八哥，中药名。为椋鸟科八哥属动物八哥Acridotheres cristatellus (Linnaeus.)的肉。分布于华南、西南等地。性平味甘，具有下气，止血之功效。常用于久嗽，呃逆，痔疮出血。体长约25厘米。嘴形尖而较直，呈乳黄色，虹膜橙黄色。额羽耸立于嘴基上，有如冠状。通体几乎纯黑色；头顶、颊、枕及耳羽具绿色的金属光泽，各羽呈矛状；上体余部不如头部之辉亮，而缀以褐色。翅圆，初级覆羽先端和初级飞羽的基部均白色，形成明显的白色翼斑，飞时显露，呈"八"字形。尾短呈平尾状，尾羽绒黑色；除中央尾羽外，均具白色羽端。下体呈幽暗的灰黑色，肛周呈浅灰或褐灰色；尾下覆羽黑色，尾羽末端白色。脚长而健，跗跖黄色。雄鸟普鸣，笼养训练，能效人言。
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