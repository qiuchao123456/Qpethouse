import React from 'react';
import img1 from '../img/65.jpg';
import img2 from '../img/66.jpg';
import img3 from '../img/67.jpg';
import img4 from '../img/68.jpg';
import img5 from '../img/69.jpg';
import img6 from '../img/70.jpg';
import img7 from '../img/71.jpg';
import img8 from '../img/72.png';
import img9 from '../img/73.jpg';
import img10 from '../img/74.jpg';
import img11 from '../img/75.png';
import img12 from '../img/76.png';
import {Link} from 'react-router-dom';

var Mid2Css =require('./mid2.css');

export default class Mid2 extends React.Component{
    render(){

        return(
            <div>
                <div className={Mid2Css.div1}>
                    <div className={Mid2Css.div8}>
                        热卖宠物
                    </div>
                    <div className={Mid2Css.div3}>
                        <marquee scrollamount="8">宠物能给我们带来快乐，挑选一只心仪的宠物吧！</marquee>
                    </div>
                    <div className={Mid2Css.div4}>
                        <div className={Mid2Css.div5}>
                            <Link to="/gou/xiboliyaxueqiaoquan">二哈</Link>
                        </div>
                        <div className={Mid2Css.div6}>
                            <Link to="/gou/xiboliyaxueqiaoquan"><img src={img7}></img></Link>
                        </div>
                        <div className={Mid2Css.div7}>
                            ￥：1200元/只
                        </div>
                    </div>
                    <div className={Mid2Css.div4}>
                        <div className={Mid2Css.div5}>
                            <Link to="/mao/buoumao">布偶猫</Link>
                        </div>
                        <div className={Mid2Css.div6}>
                            <Link to="/mao/buoumao"><img src={img8}></img></Link>
                        </div>
                        <div className={Mid2Css.div7}>
                            ￥：2000元/只
                        </div>
                    </div>
                    <div className={Mid2Css.div4}>
                        <div className={Mid2Css.div5}>
                            <Link to="/yu/jinyu">金鱼</Link>
                        </div>
                        <div className={Mid2Css.div6}>
                            <Link to="/yu/jinyu"><img src={img9}></img></Link>
                        </div>
                        <div className={Mid2Css.div7}>
                            ￥：5元/只
                        </div>
                    </div>
                    <div className={Mid2Css.clearfix}></div>
                    <div className={Mid2Css.div4}>
                        <div className={Mid2Css.div5}>
                            <Link to="/gui/jinqiangui">金钱龟</Link>
                        </div>
                        <div className={Mid2Css.div6}>
                            <Link to="/gui/jinqiangui"><img src={img10}></img></Link>
                        </div>
                        <div className={Mid2Css.div7}>
                            ￥：100元/只
                        </div>
                    </div>
                    <div className={Mid2Css.div4}>
                        <div className={Mid2Css.div5}>
                            <Link to="/tu/daerbaitu">大耳白兔</Link>
                        </div>
                        <div className={Mid2Css.div6}>
                            <Link to="/tu/daerbaitu"><img src={img11}></img></Link>
                        </div>
                        <div className={Mid2Css.div7}>
                            ￥：300元/只
                        </div>
                    </div>
                    <div className={Mid2Css.div4}>
                        <div className={Mid2Css.div5}>
                            <Link to="/niao/yingwu">鹦鹉</Link>
                        </div>
                        <div className={Mid2Css.div6}>
                            <Link to="/niao/yingwu"><img src={img12}></img></Link>
                        </div>
                        <div className={Mid2Css.div7}>
                            ￥：200元/斤
                        </div>
                    </div>

                    <div className={Mid2Css.clearfix}></div>    

                    <div className={Mid2Css.div2}>
                        精品宠物粮
                    </div>
                    <div className={Mid2Css.div3}>
                    <marquee scrollamount="8">宠物是我们的好朋友，当然要吃最好的粮食，我们提供了优质粮食供参考。</marquee>
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
                        <button className={Mid2Css.anniu}>添加到购物车</button>
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
                        <button className={Mid2Css.anniu}>添加到购物车</button>
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
                        <button className={Mid2Css.anniu}>添加到购物车</button>
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
                        <button className={Mid2Css.anniu}>添加到购物车</button>
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
                        <button className={Mid2Css.anniu}>添加到购物车</button>
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
                        <button className={Mid2Css.anniu}>添加到购物车</button>
                    </div>  
                </div>
            </div>
        )
    }
}