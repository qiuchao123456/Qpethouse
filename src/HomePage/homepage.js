import React from 'react';
import Header from '../Header/header';
import Mid1 from '../Mid1/mid1';
import Footer from '../Footer/footer';


var HomePageCss=require('./homepage.css');
export default class HomePage extends React.Component{
    render(){
        return(
           <div className={HomePageCss.div1}>    
               <Header/>
               <Mid1/>
               <Footer/>
           </div>
        )
    }
}