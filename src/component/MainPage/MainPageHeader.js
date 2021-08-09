import React from 'react';
import BreadCrumb from './breadcrumb';
import ListBox from './listBox';

const MainPageHeader = () =>{
    return(
        <div className="ui borderless top fixed menu">
            <div className="ui container" 
                style={{display: "flex", justifyContent: "space-between"}}>
                    <BreadCrumb/>
                    <ListBox/>
            </div>
        </div>
    )
}

export default MainPageHeader;