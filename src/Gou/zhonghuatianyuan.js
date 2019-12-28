import React from 'react';
import Header from '../Header/header';
import img1 from './../img/12.jpg';
import img2 from './../img/13.png';
import Footer from '../Footer/footer';
import {message} from 'antd';


var JinmaoxunhuiCss =require('./jinmaoxunhui.css');

export default class Zhonghuatianyuanquan extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    upload=()=>{
        var sendDate={
            "collection":this.state.collection
        }
        //fetch
        fetch("/coll",{
            method:"post",
            // headers:{
            //     "Content-Type":"application/json"
            // },
            //body:JSON.stringify(data)
            body:sendDate
        })
        // .then(result=>{
        //     if(result.state==2){
        //         message.info("已收藏")
        //     }else if(result.state==1){
        //         message.info("收藏成功")
        //     }
        // })
        .then(response=>response.json())
        .then(data=>console.log(data))
    }
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            中华田园犬
                            <button className={JinmaoxunhuiCss.anniu} name="collection" onChange={e=>this.changeValue(e)} onClick={this.upload}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>中华田园犬，传统称呼为“土狗”，北方有的地方又叫“柴狗”，属于食肉目、犬科、犬亚科的一种哺乳动物，长大后肩高约25~55厘米，体重约10~30公斤。属于亟待拯救的本土犬种。以前广泛存在于中国汉族农村及东南亚地区，现在城镇化也广泛把中华田园犬当作宠物狗。
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
                            ￥200元
                            <button className={JinmaoxunhuiCss.anniu}>添加到购物车</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
