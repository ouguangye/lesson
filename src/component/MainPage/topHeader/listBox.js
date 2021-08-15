import React, { useState } from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';

const menuConfig = {
    on:{
        ariaExpanded:"true",
        menuClass:"ui active visible right pointing dropdown",
        menuTransition:"menu transition visible"
    },
    off:{
        ariaExpanded:"false",
        menuClass:"ui right pointing dropdown",
        menuTransition:"menu transition"
    }
} 

const ListBox = props =>{
    const icon ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAAEDCAMAAAAGD5H5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMDc1NjkwQzREOUUxMUU0OEQ5M0VGQ0NFNTcyRTlEQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMDc1NjkwRDREOUUxMUU0OEQ5M0VGQ0NFNTcyRTlEQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQwNzU2OTBBNEQ5RTExRTQ4RDkzRUZDQ0U1NzJFOURDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQwNzU2OTBCNEQ5RTExRTQ4RDkzRUZDQ0U1NzJFOURDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+b3CoowAAADNQTFRFvL7A5+jp3N3ex8nL0dPUv8HDxcbI5OXm19ja3uDhzM7Q1NbX4uPkz9DSwcPFysvN2dvcW+APYwAAAzFJREFUeNrs3d12oyAUQOGAgqBBff+nndXVlSr1J5rYleGc/d3OTbsbFAg6txsAAAAAAAAAAAAAAAAAAAAAAADE86mzXfKKC1TWfLOV1gS1mXQ6E3RmLmhMMJjcoLDB/VeDOx8DY1rlVwOdVwS7aGBpYAwNFF4UR8bCLS0a1Ooa9IsGvfapss7Jsov5FdGp3DuYz5YbXXsI7jHw3XRvsI9PgdPxcYhx2kQJX5+FJkxbKDZqiBD27oJJxTQh7C0RKxU3iLC3TvaNhrtkeFwE08o/tiqmCj8JzNqlL2qYL00JGrc/awoKEqzPiFwjPUJ4Pin0wiOEI/Ni2RHCsaXBLIK4r57S0dXRLIKwzfb2+AJRaoT2zBpZZoTh3DbBLILGLyEBABDC28/4n76UqMxnVDSgAQ1oQAMa0IAGNKABDQprEP9ymVRIgz/9yWhAAxrQgAY0ENGgr7+OW8Wu19tgerC5c0obhPkc0qlskD+wEjU2+L2eSgob2GsfYyyxgbt4wVtig+ri5xhLbNDSYOU9BzsNRqd+LNRmVHJN3Dw04I8cSCzy3jgevTe6+9bDHcU38Edfe/I9nxwlNsheBbXzOw7HjucKWDPZrc/6z3M8T0ZDqWvntnl+T7AHn90odg/FtWM0d5u2/8Tp6G8mdy9tdlz/yasQ5DbI3wfRaWxQH19aymmQv+phMZ/eGQ1iGrg431d098V8upPfYMw2V8czJwukNAjZDvOwdrpiczQIaZCybfa+WT1i0olu0OZLB3vunI2IBj5/NVbaOmsU5TbIZoRhsbJ+ut8koMGv+2CIO6fOvMwGLp44eRdlNrCnjh/WEhuEk2cwvbwG9dlzqFFcg/b8YdxaWIOXDjV7UQ1880qDKKlB/1KC5WgouMGpicFc04tp8GqCxTsly20QzOuSjAbdOw+r5KOh2O+Z3ntixwpo8GaCfDSU2cA37zaYj4Yyzx+8nSAbDUWexYnmAqnoBkN9hVT8feFKNKABDWhAAxrQoMgGvP+A92DQgAY0oAENaEADGtCABjSY6+vPUPjf4AIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoM4/AQYAtiAriOWSGW8AAAAASUVORK5CYII="
    
    const [menuVisible,setMenuVisible]=useState(false);

    const {ariaExpanded,menuClass,menuTransition}=menuVisible
                                                ?menuConfig["on"]
                                                :menuConfig["off"]

    return(
        <div role="listbox" aria-expanded={ariaExpanded} 
            className={menuClass} tabIndex="0">
            <div className="item">
                <img src={icon} className="ui avatar image" 
                    style={{marginRight: "8px"}} alt=""
                    onClick={()=>{setMenuVisible(!menuVisible)}}    />
                <span style={{color:"white"}}>{props.userName}</span>
            </div>
            <div className={menuTransition}>
                <Menu setMenuVisible={setMenuVisible}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        userName:state.data.userName
    }
}

export default connect(mapStateToProps)(ListBox);