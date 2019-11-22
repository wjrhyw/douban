import React, { Suspense, lazy }  from 'react';
import {BrowserRouter as Router, Route,Switch, Redirect} from "react-router-dom";
import DoubanIndexcomp from '../Douban_indexcomp/index';
let Login = lazy(() => import('../Login/index'));

export default class DoubanIndex extends React.Component{
    render(){
        return(
           <Router>
                <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path='/douban' component = {DoubanIndexcomp}/>
                   
                    <Route exact path='/douban/login' component = {Login}/>
                    <Route component = {DoubanIndexcomp}/>
                    
                </Switch>
                </Suspense>
           </Router>
        )
    }
}