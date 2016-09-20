import React from 'react';
import ReactDOM from 'react-dom';
import {App, Home, About, Inbox, Unread, NotFound} from './App';
import './index.css';

import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'


function createElement(Component, props) {
    // make sure you pass all the props in!
    return <Component {...props} />
}

ReactDOM.render(
    <Router history={browserHistory} createElement={createElement}>
        <Route path='/' component={App} someDada="ds">
            <IndexRoute component={Home} />
            <Route path='about' component={About} />
            <Route path='inbox' component={Inbox} >
                <Route path="unread" component = {Unread}/>
            </Route>
        </Route>
        <Route path='*' component={NotFound} />
    </Router>,
  document.getElementById('root')
);
