import React from 'react';
import ReactDOM from 'react-dom';
import Part1 from './part1';

const LessonModal = () => {
    return ReactDOM.createPortal(
        <div className="ui page modals dimmer transition visible active"
           style={{display:"flex !important"}} >
               <div className="ui large scrolling modal transition visible active">
                    <div className="header">
                        <i aria-hidden="true" className="list icon">创建课程</i>
                    </div>
                    <div className="content">
                        <form className="ui form">
                            <Part1/>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </form>
                    </div>
               </div>
        </div>,
        document.querySelector("#modal")
    )
}

export default LessonModal;