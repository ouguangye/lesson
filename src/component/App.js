import React from 'react';
import { Route,Router } from 'react-router';
import "./style.css";
import Login from './LoginIn/Login';
import Main from './main';
import history from './history';


const App=()=>{
    return (
        <Router history={history}>
            <Route path="/" exact component={Login}></Route>
            <Route path="/main" exact component={Main}></Route>
        </Router>
    )
}

export default App;