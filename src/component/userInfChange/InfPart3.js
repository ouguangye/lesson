import React from 'react';
import { connect } from 'react-redux';
import { changeIntro } from '../../actions';

const InfPart3 = props => {
    return(
        <div className="field">
            <label>个人简介</label>
            <textarea name="introduction" placeholder="个人简介" rows="3"
                value={props.intro} 
                onChange={e=>{props.changeIntro(e.target.value)}} >
            </textarea>
        </div>
    )
} 

const mapStateToProps = state => {
    return {
        intro:state.data.introduction
    }
}

export default connect(mapStateToProps,{changeIntro})(InfPart3);