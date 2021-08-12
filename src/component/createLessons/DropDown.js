import React,{useEffect, useState} from 'react';
import MenuTransition from "./menuTransition";
import { connect } from 'react-redux';
import {openCollect} from '../../actions'

const DropDown = props => {
    const menuConfig = {
        on:{
            ariaExpanded:"true",
            menuClass:"ui active visible selection dropdown",
            menuTransition:"menu transition visible"
        },
        off:{
            ariaExpanded:"false",
            menuClass:"ui selection dropdown",
            menuTransition:"menu transition"
        }
    } 
    const [menuVisible,setMenuVisible]=useState(false);
    const [option,setOption]=useState("否");

    const {ariaExpanded,menuClass,menuTransition}=menuVisible
                                                ?menuConfig["on"]
                                                :menuConfig["off"];
    
    useEffect(()=>{
        props.openCollect(option);
    },[menuVisible,option])

    return (
        <div name={props.name} role="listbox" aria-expanded={ariaExpanded}
                className={menuClass} tabIndex="0" >
            <div aria-atomic="true" aria-live="polite"
                className="divider text" role="alert">
                {option}
            </div>
            <i aria-hidden="true" className="dropdown icon"
                onClick={()=>{setMenuVisible(!menuVisible)}} ></i>
            <div className={menuTransition}>
                <MenuTransition option={option} setOption={setOption}/>
            </div>
        </div>  
    )
}

export default connect(null,{openCollect})(DropDown); 