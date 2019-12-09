import React from 'react';
import {Link} from 'react-router-dom';


var HanderCss =require('./hander.css');

export default class Hander extends React.Component{
    render(){
        return(
            <div>
                <Link to="/login"><h3>登录</h3></Link>
                
            </div>
           
        )
    }
}