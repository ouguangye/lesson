import React from 'react';
import { Route,Router } from 'react-router';
import Login from './LoginIn/Login';
import Main from './MainPage/main';
import CreateLesson from './createLessons/createLesson';
import history from './history';
import LessonDetail from './LessonDetail/LessonDetail';
import "./style.css";

const App=()=>{
    return (
        <Router history={history}>
            <Route path="/" exact component={Login}></Route>
            <Route path="/main/:id" exact component={Main}></Route>
            <Route path="/create" exact component={CreateLesson}></Route>
            <Route path="/lesson/:id" exact component={LessonDetail}></Route>
        </Router>
    )
}

export default App;