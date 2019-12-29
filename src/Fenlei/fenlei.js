import React from 'react';
import Header from './../Header/header';
import Footer from './../Footer/footer';
import {Link} from 'react-router-dom';


var FenleiCss =require('./fenlei.css');

export default class Fenlei extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className={FenleiCss.div1}>
                    <div className={FenleiCss.div2}>
                        <ul2 className={FenleiCss.div4}>犬类：</ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/gou/jinmaoxunhuiquan">金毛寻回犬</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/gou/xiboliyaxueqiaoquan">西伯利亚雪橇犬</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/gou/chaiquan">柴犬</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/gou/zhonghuatianyuanquan">中华田园犬</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/gou/jiwawaquan">吉娃娃</Link></ul2>
                    </div>
                    
                    <div className={FenleiCss.clearfix}></div>

                    <div className={FenleiCss.div2}>
                        <ul2 className={FenleiCss.div4}>猫类：</ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/mao/lihuamao">狸花猫</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/mao/zheermao">折耳猫</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/mao/baomao">豹猫</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/mao/buoumao">布偶猫</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/mao/bosimao">波斯猫</Link></ul2>
                    </div>
                                        
                    <div className={FenleiCss.clearfix}></div>
                    
                    <div className={FenleiCss.div2}>
                        <ul2 className={FenleiCss.div4}>鱼类：</ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/yu/jinyu">金鱼</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/yu/shenxianyu">神仙鱼</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/yu/haishuiyu">海水鱼</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/yu/dengyu">灯鱼</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/yu/bimuyu">比目鱼</Link></ul2>
                    </div>
                                        
                    <div className={FenleiCss.clearfix}></div>
                    
                    <div className={FenleiCss.div2}>
                        <ul2 className={FenleiCss.div4}>龟类：</ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/gui/jinqiangui">金钱龟</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/gui/zhenegui">真鳄龟</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/gui/ditugui">地图龟</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/gui/zhonghuagui">中华龟</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/gui/hongtuilugui">红腿陆龟</Link></ul2>
                    </div>
                                        
                    <div className={FenleiCss.clearfix}></div>
                    
                    <div className={FenleiCss.div2}>
                        <ul2 className={FenleiCss.div4}>兔类：</ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/tu/helanchuiertu">荷兰垂耳兔</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/tu/bolantu">波兰兔</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/tu/haitangtu">海棠兔</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/tu/daerbaitu">大耳白兔</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/tu/jiliantu">忌廉兔</Link></ul2>
                    </div>
                                        
                    <div className={FenleiCss.clearfix}></div>
                    
                    <div className={FenleiCss.div2}>
                        <ul2 className={FenleiCss.div4}>鸟类：</ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/niao/bage">八哥</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/niao/liaoge">鹩哥</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/niao/yingwu">鹦鹉</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/niao/daisheng">戴胜</Link></ul2>
                        <ul2 className={FenleiCss.div3}><Link to="/niao/jiaobailing">吉娃娃</Link></ul2>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}