import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage/homepage';
import * as serviceWorker from './serviceWorker';
import Login from './Login/login';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Zhonghuantianyuanquan from './Gou/zhonghuatianyuan';
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



class IndexPage extends React.Component{
    render(){
        return(
           <div>
               <BrowserRouter basename="pethouse">
                    <Switch>
                        {/* 狗 */}
                        <Route path="/homepage" component={HomePage}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/gou/zhonghuatianyuanquan" component={Zhonghuantianyuanquan}></Route>
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
