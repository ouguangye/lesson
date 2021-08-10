import React from 'react';
import Lessons from './lessons';
import UserPart from './UserPart';

const MainContent = () => {
    return (
        <div className="lms-content">
            <div className="ui container">
                <img src="http://lms.scutnc.cn/static/media/bg@2x.4fa27250.png"
                    className="ui image backgroundImage" alt=""/>
                <UserPart/>
                <br/><br/><br/>
                <Lessons/>
            </div>
        </div>
        )
}

export default MainContent;