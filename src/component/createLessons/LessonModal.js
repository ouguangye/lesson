import React from 'react';
import ReactDOM from 'react-dom';
import Part1 from './part1';
import Date from './Date';
import Button from './Button';
import ErrorMessage from './ErrorMessage';

const LessonModal = () => {
    return ReactDOM.createPortal(
        <div className="ui page modals dimmer transition visible active"
           style={{display:"flex !important"}} >
               <div className="ui large scrolling modal transition visible active"
                    style={{marginTop:"100px",marginLeft:"80px"}}
               >
                    <div className="header">
                        <i aria-hidden="true" className="list icon"></i>
                        创建课程
                    </div>
                    <div className="content">
                        <form className="ui form">
                            <Part1/>
                            <Date/>
                            <ErrorMessage/>
                            <Button/>
                        </form>
                    </div>
               </div>
        </div>,
        document.querySelector("#modal")
    )
}

export default LessonModal;