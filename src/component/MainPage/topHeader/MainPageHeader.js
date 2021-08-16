import React from 'react';
import BreadCrumb from './breadcrumb';
import ListBox from './listBox';

const style ={
    backgroundColor:"transparent",
    border:"0px",
    boxShadow:"none",
    color: "white",
    height:"56px"
}

const MainPageHeader = () =>{
    return(
        <div className="ui borderless top fixed menu" style={style}>
            <div className="ui container" 
                style={{display: "flex", justifyContent: "space-between"}}>
                    <BreadCrumb color="white" headerName={()=>{return;}}/>
                    <ListBox color="white"/>
            </div>
        </div>
    )
}

export default MainPageHeader;