import React from 'react';
import CreateLessonButton from './createLessonButton';
import UserInf from './UserInf';

const UserPart = () => {
    return (
        <div className="ui stuck-container fixed-container"
            style={{visibility: "hidden"}} >
                
            <div style={{height: "150px"}}></div>

            <div className="ui fixed top sticky"
                style={{width:"1127px", top:"80px"}} >

                    <div className="user head portrait">
                        <UserInf/>
                        <CreateLessonButton/>
                    </div>
            </div>
        </div>
    )
}

export default UserPart;