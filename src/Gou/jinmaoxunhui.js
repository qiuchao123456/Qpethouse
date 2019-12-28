import React from 'react';
import Header from './../Header/header';
import img1 from './../img/6.jpg';
import img2 from './../img/7.png';
import Footer from './../Footer/footer';


var JinmaoxunhuiCss =require('./jinmaoxunhui.css');

export default class Jinmaoxunhuiquan extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    upload=()=>{
        var date={
            "collection":this.state.collection
        }
    }
    //fetch
    // fetch.post("/collection")
    render(){
        return(
            <div  className={JinmaoxunhuiCss.beijing}>
                <Header/>
                <div className={JinmaoxunhuiCss.div1}>
                    <div  className={JinmaoxunhuiCss.div5}>
                        <div className={JinmaoxunhuiCss.div2}>
                            金毛寻回犬
                            <button onClick={this.upload} name="collection" className={JinmaoxunhuiCss.anniu}>收藏</button>
                        </div>

                        <div  className={JinmaoxunhuiCss.clearfix}></div>

                        <div className={JinmaoxunhuiCss.div8}>
                            <div className={JinmaoxunhuiCss.div4}>金毛寻回犬（Golden Retriever）是单猎犬，比较流行的狗的品种。在猎捕野禽的寻回犬中培养出来的，游泳的续航力极佳。
                                金毛寻回犬是最常见的家犬之一，它很容易养，有耐心并且对主人要求不多，只要定期运动，食物和兽医体检就可以了。它属于匀称、有力、活泼的一个犬种，特征是稳固、身体各部位配合合理，腿既不太长也不笨拙，表情友善，个性热情、机警、自信而且不怕生，性格讨人喜欢。金毛犬最早是一种寻回猎犬，现在大多作为导盲犬与宠物狗。对小孩子或者婴儿十分友善。金毛犬是位列世界犬种智商排行的第四名。
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
                            ￥600元
                            <button className={JinmaoxunhuiCss.anniu}>添加到购物车</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}