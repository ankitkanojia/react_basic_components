import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import ImageVerification from '../Pages/ImageVerification';
import Scrollbar from '../Pages/Scrollbar';
import Chart from '../Pages/Chart';
import Pagination from '../Pages/Pagination';
import TablePagination from '../Pages/TablePagination';

const Main = () => (
        <Switch>
            <Route exact path='/' component={Home}/>Scrollbar
            <Route exact path='/imageverification' component={ImageVerification}/>
            <Route exact path='/scrollbar' component={Scrollbar}/>
            <Route exact path='/charts' component={Chart}/>
            <Route exact path='/pagination' component={Pagination}/>
            <Route exact path='/tablepagination' component={TablePagination}/>
        </Switch>
)

export default Main;