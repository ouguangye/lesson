import React, { useState } from 'react';
import LessonModal from '../../createLessons/LessonModal';

const CreateLessonButton = () => {
    const [visible,setVisible] = useState(false);
    return(
        <div className="field">
            <button className="ui positive button" 
                style={{visibility: "visible"}}
                onClick={()=>{setVisible(true)}}    >
                    创建课程
            </button>
            {visible?<LessonModal setVisible={setVisible} href="/main"/>:null}
        </div>
    )
}

export default CreateLessonButton