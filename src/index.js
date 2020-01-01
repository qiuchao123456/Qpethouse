import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage/homepage';
import * as serviceWorker from './serviceWorker';
//登录
import Login from './Login/login';
import Adminlogin from './Login/adminlogin';
//注册
import Register from './Register/register';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Zhonghuantianyuanquan from './Gou/Zhonghuatianyuanquan';
import Jinmaoxunhuiquan from './Gou/jinmaoxunhui';
import Xiboliyaxueqiaoquan from './Gou/xiboliyaxueqiao';
import Chai from './Gou/chai';
import Jiwawa from './Gou/jiwawa';
import Lihua from './Mao/lihua';
import Zheer from './Mao/zheer';
import Bao from './Mao/bao';
import Buou from './Mao/buou';
import Bosi from './Mao/bosi';
import Jinyu from './Yu/jinyu';
import Shenxianyu from './Yu/shenxianyu';
import Haishuiyu from './Yu/haishuiyu';
import Dengyu from './Yu/dengyu';
import Bimuyu from './Yu/bimuyu';
import Jinqiangun from './Gui/jinqiangui';
import Zhenegui from './Gui/zhenegui';
import Ditugui from './Gui/ditugui';
import Zhonghuagui from './Gui/zhonghuagui';
import Hongtuilugui from './Gui/hongtuilugui';
import Helanchuiertu from './Tu/helanchuiertu';
import Bolantu from './Tu/bolantu';
import Haitangtu from './Tu/haitangtu';
import Daerbaitu from './Tu/daerbaitu';
import Jiliantu from './Tu/jiliantu';
import Liaoge from './Niao/liaoge';
import Yingwu from './Niao/yingwu';
import Daisheng from './Niao/daisheng';
import Jiaobailing from './Niao/jiaobailing';
import Bage from './Niao/bage';
import Fenlei from './Fenlei/fenlei';
import Luntan from './Luntan/luntan';
import Collection from './Collection/collection';
import Guanliduan from './Guanliduan/guanliduan';
import Yonghuguanli from './Guanliduan/yonghuguanli';




class IndexPage extends React.Component{
    render(){
        return(
           <div>
               <BrowserRouter basename="pethouse">
                    <Switch>
                        
                        <Route path="/homepage" component={HomePage}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/zhonghuatianyuanquan" component={Zhonghuantianyuanquan}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/adminlogin" component={Adminlogin}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route path="/fenlei"component={Fenlei}></Route>
                        <Route path="/luntan"component={Luntan}></Route>
                        <Route path="/collection" component={Collection}></Route>
                        <Route path="/guanliduan" component={Guanliduan}></Route>
                        <Route path="/yonghuguanli" component={Yonghuguanli}></Route>

                        {/* 狗 */}
                        <Route path="/gou/jinmaoxunhuiquan" component={Jinmaoxunhuiquan}></Route>
                        <Route path="/gou/chaiquan" component={Chai}></Route>
                        <Route path="/gou/xiboliyaxueqiaoquan" component={Xiboliyaxueqiaoquan}></Route>
                        <Route path="/gou/zhonghuatianyuanquan" component={Zhonghuantianyuanquan}></Route>
                        <Route path="/gou/jiwawaquan" component={Jiwawa}></Route>

                        {/* 猫 */}
                        <Route path="/mao/lihuamao" component={Lihua}></Route>
                        <Route path="/mao/zheermao"component={Zheer}></Route>
                        <Route path="/mao/baomao"component={Bao}></Route>
                        <Route path="/mao/buoumao"component={Buou}></Route>
                        <Route path="/mao/bosimao"component={Bosi}></Route>

                        {/* 鱼 */}
                        <Route path="/yu/jinyu" component={Jinyu}></Route>
                        <Route path="/yu/shenxianyu"component={Shenxianyu}></Route>
                        <Route path="/yu/haishuiyu"component={Haishuiyu}></Route>
                        <Route path="/yu/dengyu"component={Dengyu}></Route>
                        <Route path="/yu/bimuyu"component={Bimuyu}></Route>

                        {/* 龟 */}
                        <Route path="/gui/jinqiangui"component={Jinqiangun}></Route>
                        <Route path="/gui/zhenegui"component={Zhenegui}></Route>
                        <Route path="/gui/ditugui"component={Ditugui}></Route>
                        <Route path="/gui/zhonghuagui"component={Zhonghuagui}></Route>
                        <Route path="/gui/hongtuilugui"component={Hongtuilugui}></Route>

                        {/* 兔 */}
                        <Route path="/tu/helanchuiertu"component={Helanchuiertu}></Route>
                        <Route path="/tu/bolantu"component={Bolantu}></Route>
                        <Route path="/tu/haitangtu"component={Haitangtu}></Route>
                        <Route path="/tu/daerbaitu"component={Daerbaitu}></Route>
                        <Route path="/tu/jiliantu"component={Jiliantu}></Route>

                        {/* 鸟 */}
                        <Route path="/niao/bage"component={Bage}></Route>
                        <Route path="/niao/liaoge"component={Liaoge}></Route>
                        <Route path="/niao/yingwu"component={Yingwu}></Route>
                        <Route path="/niao/daisheng"component={Daisheng}></Route>
                        <Route path="/niao/jiaobailing"component={Jiaobailing}></Route>

                        <Redirect to="/homepage"></Redirect>
                    </Switch>
               </BrowserRouter>
           </div>
        )
    }
}

ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
