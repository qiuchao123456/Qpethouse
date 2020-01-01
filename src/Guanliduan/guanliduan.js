import React from 'react';
import { Menu, Dropdown, Icon, Switch } from 'antd';
import img1 from '../img/1.1.png';
import {Link} from 'react-router-dom';
import {Input} from 'antd';

var GuanliduanCss =require('./guanliduan.css');

export default class Guanliduan extends React.Component{
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
            <div className={GuanliduanCss.div1}>

                <Link to="/homepage"><p className={GuanliduanCss.div5}>回到首页</p></Link>
                <div className={GuanliduanCss.header}>
                    <div className={GuanliduanCss.tu1}>
                        <img src={img1}></img>
                    </div>
                    宠物之家管理端
                </div>

                <div className={GuanliduanCss.clearfix}></div>

                <div className={GuanliduanCss.div2}>
                <div className={GuanliduanCss.xian}></div>
                    <div className={GuanliduanCss.div4}>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" href="#">
                                管理员信息 <Icon type="down" />
                            </a>
                        </Dropdown>  
                    </div>

                    <div className={GuanliduanCss.clearfix}></div>

                    <div className={GuanliduanCss.xian}></div>
                    <div className={GuanliduanCss.div4}>
                            <a className="ant-dropdown-link" href="#">
                                <Link to="/yonghuguanli">用户管理</Link>
                            </a>
                    </div>
                                        
                    <div className={GuanliduanCss.clearfix}></div>

                    <div className={GuanliduanCss.xian}></div>
                    <div className={GuanliduanCss.div4}>
                            <a className="ant-dropdown-link" href="#">
                               广告管理
                            </a>
                    </div>
                                        
                    <div className={GuanliduanCss.clearfix}></div>

                    <div className={GuanliduanCss.xian}></div>
                    <div className={GuanliduanCss.div4}>
                            <a className="ant-dropdown-link" href="#">
                                评论管理
                            </a>
                    </div>
                                        
                    <div className={GuanliduanCss.clearfix}></div>

                    <div className={GuanliduanCss.xian}></div>
                    <div className={GuanliduanCss.div4}>
                        宠物添加
                    </div>
                    <div className={GuanliduanCss.xian}></div>
                </div>
                <div  className={GuanliduanCss.div3}>
                    <p>管理员信息</p>
                    <div className={GuanliduanCss.div8}>管理员一</div>
                    <div>
                        <div className={GuanliduanCss.div6}>
                            <ul>姓名：</ul>
                        </div>
                        <div  className={GuanliduanCss.div7}>
                            <Input type="text" value="王麻子"></Input>
                        </div>
                        
                        <div className={GuanliduanCss.clearfix}></div>

                        <div className={GuanliduanCss.div6}>
                            <ul>性别：</ul>
                        </div>
                        <div  className={GuanliduanCss.div7}>
                            <Input type="text" value="男"></Input>
                        </div>

                        <div className={GuanliduanCss.clearfix}></div>

                        <div className={GuanliduanCss.div6}>
                            <ul>电话：</ul>
                        </div>
                        <div  className={GuanliduanCss.div7}>
                            <Input type="text" value="123456789"></Input>
                        </div>

                        <div className={GuanliduanCss.clearfix}></div>

                        <div className={GuanliduanCss.div6}>
                            <ul>职业：</ul>
                        </div>
                        <div  className={GuanliduanCss.div7}>
                            <Input type="text" value="在读大学生"></Input>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}