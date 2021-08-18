import React, { useEffect } from 'react';
import PhotoContent from './photoContent';
import InfField from './InfField';
import DropDown from './DropDown';
import { connect } from 'react-redux';
import {nameCollect} from "../../actions"

const Part1 = props => {
   
    return(
        <div className="ui grid">
           <PhotoContent/>
            <div className="eleven wide column">
                <div className="fields">
                    <div className="twelve wide field">
                        <label>课程名称</label>
                        <div className="ui input">
                            <input name="name" placeholder="新建课程班名称"
                                type="text"
                                onChange={
                                    e => {props.nameCollect(e.target.value)}
                                }/>
                        </div>
                    </div>
                    <div className="field">
                        <label>公开课</label>
                        <DropDown name="isOpen"/>
                    </div>
                </div>
                <InfField/>
            </div>
        </div>
    )
}


export default connect(null,{nameCollect})(Part1);