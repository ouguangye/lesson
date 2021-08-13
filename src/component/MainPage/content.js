import React from 'react';
import UserPart from './UserPart';
import Lesson from './Lesson';

const Content = () => {
    return(
        <React.Fragment>
            <UserPart/>
                <br/><br/><br/>
            <Lesson/>
        </React.Fragment>
    )
}

export default Content;