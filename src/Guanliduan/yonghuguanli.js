import React from 'react';
import { Menu, Dropdown, Icon, Switch } from 'antd';
import img1 from '../img/1.1.png';
import {Link} from 'react-router-dom';
import {Input} from 'antd';

var YonghuguanliCss =require('./yonghuguanli.css');

export default class Yonghuguanli extends React.Component{
    // constructor(props){
            
    // }
    render(){

        const menu = (
                <Menu>
                    <Menu.Item>
                        <Link to="/guanliduan">管理员一</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <a target="_blank" rel="noopener noreferrer" >
                            管理员二
                        </a>
                    </Menu.Item>
                </Menu>
            );
        return(
            <div className={YonghuguanliCss.div1}>

                <Link to="/homepage"><p className={YonghuguanliCss.div5}>回到首页</p></Link>
                <div className={YonghuguanliCss.header}>
                    <div className={YonghuguanliCss.tu1}>
                        <img src={img1}></img>
                    </div>
                    宠物之家管理端
                </div>

                <div className={YonghuguanliCss.clearfix}></div>

                <div className={YonghuguanliCss.div2}>
                <div className={YonghuguanliCss.xian}></div>
                    <div className={YonghuguanliCss.div4}>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" href="#">
                                管理员信息 <Icon type="down" />
                            </a>
                        </Dropdown>  
                    </div>

                    <div className={YonghuguanliCss.clearfix}></div>

                    <div className={YonghuguanliCss.xian}></div>
                    <div className={YonghuguanliCss.div4}>
                            <a className="ant-dropdown-link" href="#">
                                <Link to="/yonghuguanli">用户管理</Link>
                            </a>
                    </div>
                                        
                    <div className={YonghuguanliCss.clearfix}></div>

                    <div className={YonghuguanliCss.xian}></div>
                    <div className={YonghuguanliCss.div4}>
                            <a className="ant-dropdown-link" href="#">
                               广告管理
                            </a>
                    </div>
                                        
                    <div className={YonghuguanliCss.clearfix}></div>

                    <div className={YonghuguanliCss.xian}></div>
                    <div className={YonghuguanliCss.div4}>
                            <a className="ant-dropdown-link" href="#">
                                评论管理
                            </a>
                    </div>
                                        
                    <div className={YonghuguanliCss.clearfix}></div>

                    <div className={YonghuguanliCss.xian}></div>
                    <div className={YonghuguanliCss.div4}>
                        宠物添加
                    </div>
                    <div className={YonghuguanliCss.xian}></div>
                </div>
                <div  className={YonghuguanliCss.div3}>
                    <p>用户管理</p>
                    <div className={YonghuguanliCss.xian}></div>
                    <div className={YonghuguanliCss.div6}>用户一：</div>

                    <div className={YonghuguanliCss.clearfix}></div>

                    <div className={YonghuguanliCss.xian}></div>
                    <div className={YonghuguanliCss.div6}>用户二：</div>

                    <div className={YonghuguanliCss.clearfix}></div>

                    <div className={YonghuguanliCss.xian}></div>
                    <div className={YonghuguanliCss.div6}>用户三：</div>
                    

                    <div className={YonghuguanliCss.xian}></div>
                    <div className={YonghuguanliCss.div6}>用户四：</div>

                    <div className={YonghuguanliCss.xian}></div>
                    <div className={YonghuguanliCss.div6}>用户五：</div>

                    <div className={YonghuguanliCss.clearfix}></div>

                    <div className={YonghuguanliCss.xian}></div>
                    <div className={YonghuguanliCss.div6}>用户六：</div>

                </div>
            </div>
        )
    }
}