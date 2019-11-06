import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import ImageVerification from '../Pages/ImageVerification';
import Scrollbar from '../Pages/Scrollbar';

const Main = () => (
        <Switch>
            <Route exact path='/' component={Home}/>Scrollbar
            <Route exact path='/imageverification' component={ImageVerification}/>
            <Route exact path='/scrollbar' component={Scrollbar}/>
        </Switch>
)

export default Main;