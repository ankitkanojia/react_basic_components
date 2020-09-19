import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import ImageVerification from '../Pages/ImageVerification';
import Scrollbar from '../Pages/Scrollbar';
import Chart from '../Pages/Chart';
import Pagination from '../Pages/Pagination';
import TablePagination from '../Pages/TablePagination';
import TreeView from '../Pages/TreeView';
import DragDrop from '../Pages/DragDrop';

const Main = () => (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/treeview' component={TreeView}/>
            <Route exact path='/imageverification' component={ImageVerification}/>
            <Route exact path='/scrollbar' component={Scrollbar}/>
            <Route exact path='/charts' component={Chart}/>
            <Route exact path='/pagination' component={Pagination}/>
            <Route exact path='/tablepagination' component={TablePagination}/>
            <Route exact path='/dragdrop' component={DragDrop}/>
        </Switch>
)

export default Main;