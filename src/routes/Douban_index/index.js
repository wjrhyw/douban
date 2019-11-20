import React, { Suspense, lazy }  from 'react';
import {BrowserRouter as Router, Route,Switch, Redirect} from "react-router-dom";
import DoubanIndexcomp from '../Douban_indexcomp/index';
import Doubanlogin from '../Douban_login/index';

export default class DoubanIndex extends React.Component{
    render(){
        return(
           <Router>
                <Switch>
                    <Route exact path="/douban/login" component = {Doubanlogin}/>
                    <Route exact path='/' component = {DoubanIndexcomp}/>
                    <Route component = {DoubanIndexcomp}/>
                </Switch>
           </Router>
        )
    }
}