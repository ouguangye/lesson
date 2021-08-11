import React from 'react';
import history from '../history';

const CreateLessonButton = () => {
    return(
        <div className="field">
            <button className="ui positive button" 
                style={{visibility: "visible"}}
                onClick={()=>{history.push("/create")}}    >
                    创建课程
            </button>
        </div>
    )
}

export default CreateLessonButton;