import React from 'react';
import ReactDOM from 'react-dom';
import Part1 from './part1';
import Date from './Date';
import Button from './Button';

const LessonModal = () => {
    return ReactDOM.createPortal(
        <div className="ui page modals dimmer transition visible active"
           style={{display:"flex !important"}} >
               <div className="ui large scrolling modal transition visible active">
                    <div className="header">
                        <i aria-hidden="true" className="list icon"></i>
                        创建课程
                    </div>
                    <div className="content">
                        <form className="ui form">
                            <Part1/>
                            <Date/>
                            <div className="ui error message"></div>
                            <Button/>
                        </form>
                    </div>
               </div>
        </div>,
        document.querySelector("#modal")
    )
}

export default LessonModal;