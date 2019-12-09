import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage/homepage';
import * as serviceWorker from './serviceWorker';
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';



class IndexPage extends React.Component{
    render(){
        return(
           <div>
               <HomePage/>
               {/* <BrowserRouter basename="pethouse">
                    <Switch>
                        <Route path="" component={}></Route>
                    </Switch>
               </BrowserRouter> */}
           </div>
        )
    }
}

ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
