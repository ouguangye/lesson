import React from 'react';
import ReactDOM from 'react-dom';
import Part1 from './part1';
import Date from './Date';
import Button from './Button';
import ErrorMessage from './ErrorMessage';
import { useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { nameCollect,hourCollect,creditCollect,startDateCollect,endDateCollect} from '../../actions';

const LessonModal = props => {
    
    const {nameCollect,hourCollect,creditCollect,startDateCollect,endDateCollect}=props;

    useEffect(()=>{
        nameCollect(props.name) ;
        hourCollect(props.hour);
        creditCollect(props.credit);
        startDateCollect(props.startDate);
        endDateCollect(props.endDate);
    },[nameCollect])

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
                            <Button setVisible={props.setVisible} href={props.href}/>
                        </form>
                    </div>
               </div>
        </div>,
        document.querySelector("#modal")
    )
}

export default connect(null,{
    nameCollect,
    hourCollect,
    creditCollect,
    startDateCollect,
    endDateCollect
})(LessonModal);