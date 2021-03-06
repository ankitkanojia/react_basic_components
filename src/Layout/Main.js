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
import Draggable from '../Pages/Draggable';
import TextChat from '../Pages/TextChat';
import PushNotification from '../Pages/PushNotification';

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
            <Route exact path='/draggable' component={Draggable}/>
            <Route exact path='/textchat' component={TextChat}/>
            <Route exact path='/notification' component={PushNotification}/>
        </Switch>
)

export default Main;