import React from 'react';
import { Route,Router,Switch } from 'react-router-dom';
import Content from './content';
import history from '../history';
import MyInf from '../userInfChange/myInf';


const imageStyle = {
    position:"fixed",
    top: "-40px",
    right:"0px",
    height:"240px",
    width:"100%"
}

const MainContent = () => {
    return (
        <div className="lms-content">
            <div className="ui container">
                <img src="http://lms.scutnc.cn/static/media/bg@2x.4fa27250.png"
                    className="ui image backgroundImage" alt="" style={imageStyle}/>
                <Router history={history}>
                    <Switch>
                        <Route path="/main/my" exact component={MyInf}></Route>
                        <Route path="/main" component={Content}></Route>
                    </Switch>
                </Router>
            </div>
        </div>
        )
}

export default MainContent;