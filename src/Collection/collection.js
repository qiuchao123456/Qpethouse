import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';


var CollectionCss =require('./collection.css');

export default class Collection extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <div className={CollectionCss.div1}>
                    <div className={CollectionCss.div2}>
                        我的收藏
                    </div>
                    <div>
                        
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}