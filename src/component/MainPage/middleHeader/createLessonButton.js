import React, { useState } from 'react';
import LessonModal from '../../createLessons/LessonModal';
import moment from 'moment';

const CreateLessonButton = () => {
    const [visible,setVisible] = useState(false);
    return(
        <div className="field">
            <button className="ui positive button" 
                style={{visibility: "visible"}}
                onClick={()=>{setVisible(true)}}    >
                    创建课程
            </button>
            {visible?
                <LessonModal 
                    setVisible={setVisible} 
                    href="/main"
                    name=""
                    startDate={moment().format('YYYY-MM-DD')}
                    endDate=""
                    hour=""
                    credit=""
                />
            :null}
        </div>
    )
}

export default CreateLessonButton