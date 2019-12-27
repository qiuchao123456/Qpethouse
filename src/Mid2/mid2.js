import React from 'react';
import img1 from '../img/65.jpg';
import img2 from '../img/66.jpg';
import img3 from '../img/67.jpg';
import img4 from '../img/68.jpg';
import img5 from '../img/69.jpg';
import img6 from '../img/70.jpg';
import Fenlei from '../Fenlei/fenlei';

var Mid2Css =require('./mid2.css');

export default class Mid2 extends React.Component{
    render(){

        return(
            <div>
                <div className={Mid2Css.div1}>
                    <div className={Mid2Css.div2}>
                        精品宠物粮
                    </div>
                    <div className={Mid2Css.div3}>
                        广告
                    </div>
                    <div className={Mid2Css.div4}>
                        <div className={Mid2Css.div5}>
                            狗粮
                        </div>
                        <div className={Mid2Css.div6}>
                            <img src={img1}></img>
                        </div>
                        <div className={Mid2Css.div7}>
                            ￥：100元/斤
                        </div>
                    </div>
                    <div className={Mid2Css.div4}>
                        <div className={Mid2Css.div5}>
                            猫粮
                        </div>
                        <div className={Mid2Css.div6}>
                            <img src={img2}></img>
                        </div>
                        <div className={Mid2Css.div7}>
                            ￥：100元/斤
                        </div>
                    </div>
                    <div className={Mid2Css.div4}>
                        <div className={Mid2Css.div5}>
                            鸟粮
                        </div>
                        <div className={Mid2Css.div6}>
                            <img src={img3}></img>
                        </div>
                        <div className={Mid2Css.div7}>
                            ￥：100元/斤
                        </div>
                    </div>
                    <div className={Mid2Css.clearfix}></div>
                    <div className={Mid2Css.div4}>
                        <div className={Mid2Css.div5}>
                            龟粮
                        </div>
                        <div className={Mid2Css.div6}>
                            <img src={img4}></img>
                        </div>
                        <div className={Mid2Css.div7}>
                            ￥：100元/斤
                        </div>
                    </div>
                    <div className={Mid2Css.div4}>
                        <div className={Mid2Css.div5}>
                            鱼粮
                        </div>
                        <div className={Mid2Css.div6}>
                            <img src={img5}></img>
                        </div>
                        <div className={Mid2Css.div7}>
                            ￥：100元/斤
                        </div>
                    </div>
                    <div className={Mid2Css.div4}>
                        <div className={Mid2Css.div5}>
                            兔粮
                        </div>
                        <div className={Mid2Css.div6}>
                            <img src={img6}></img>
                        </div>
                        <div className={Mid2Css.div7}>
                            ￥：100元/斤
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
}