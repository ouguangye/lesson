import React from 'react';
import ReactDOM from 'react-dom';
import Part1 from './part1';
import Date from './Date';
import Button from './Button';
import ErrorMessage from './ErrorMessage';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { nameCollect,hourCollect,creditCollect,startDateCollect,endDateCollect} from '../../actions';

const LessonModal = props => {
    
    const {nameCollect,hourCollect,creditCollect,startDateCollect,endDateCollect}=props;
    const {name,hour,credit,startDate,endDate} = props;
    useEffect(()=>{
        nameCollect(name) ;
        hourCollect(hour);
        creditCollect(credit);
        startDateCollect(startDate);
        endDateCollect(endDate);
    },[nameCollect,
        hourCollect,
        creditCollect,
        startDateCollect,
        endDateCollect,
        name,hour,credit,startDate,endDate
    ])

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
                            <Part1 name={props.name}/>
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