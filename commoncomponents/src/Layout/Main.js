import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import ImageVerification from '../Pages/ImageVerification';

const Main = () => (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/imageverification' component={ImageVerification}/>
        </Switch>
)

export default Main;