import React from 'react';
import { connect } from 'react-redux';
import {startDateCollect,endDateCollect} from "../../actions"


const Date = props => {

    const {startDateCollect,endDateCollect,startDate,endDate}=props;

    return (
        <div className="equal width fields">
            <div className="field">
                <label>课程开始日期</label>
                <div className="ui fluid icon input" 
                    style={{margin:"8px 0px",alignItems:"baseline"}}>
                        <i aria-hidden="true" className="calendar icon"></i>
                        <input id="startDate" name="startDate"
                            type="text" value={startDate} 
                            onChange={e=>{startDateCollect(e.target.value)}}
                         >
                        </input>
                </div>
            </div>
            <div className="field">
                <label>课程截止日期</label>
                <div className="ui fluid icon input" 
                    style={{margin:"8px 0px",alignItems:"baseline"}}>
                        <i aria-hidden="true" className="calendar icon"></i>
                        <input id="endDate" name="endDate" 
                            type="text" value={endDate}
                            onChange={e=>{endDateCollect(e.target.value)}} >
                        </input>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        startDate: state.create.startDate,
        endDate: state.create.endDate
    }
}

export default connect(mapStateToProps,{startDateCollect,endDateCollect})(Date);