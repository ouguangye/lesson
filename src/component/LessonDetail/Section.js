import React,{ useState } from "react";
import DeleteModal from "./DeleteModal";
import lms from "../../api/lms";
import Unit from "./Unit";
import HomeWork from "./HomeWork";
import SectionModal from "./SectionModal/sectionModal";

const menuConfig = {
    on:{
        shadow:"none",
        radius:"8px 8px 0px 0px",
        content:"content active"
    },
    off:{
        shadow:"rgba(0, 0, 0, 0.08) 0px 2px 4px 0px",
        radius:"8px",
        content:"content"
    }
}

const renderUnit = () => {
    return <Unit/>
}

const renderHomeWork = () => {
    return <HomeWork/>
}

const Section = props => {
    const [show,setShow]=useState(false);
    const [visible,setVisible] = useState(false);
    const [edit,setEdit] = useState(false);
    const { shadow,radius,content }=show?menuConfig["on"]:menuConfig["off"];
    const [hover,setHover] = useState(false);
    const showClass =hover?"visible":"hidden" ;
    const style = {
        fontSize:"16px", 
        lineHeight:"40px",
        background:"white",
        padding:"8px",
        marginTop: "8px", 
        boxShadow: shadow,
        borderRadius:radius
    }

    const deleteSection = async() => {
        await lms.post(
            "/json/creator/deleteSection",{},{
                params:{
                    courseId: props.currentId,
                    id: props.id
                }
            }
        )
        window.location.href=`/lesson/${props.currentId}`
    }

    return(
        <div className="accordion ui fluid styled" 
        style={{background:"transparent"}}>

          <div 
            className="title ellipsis" 
            style={style}
            onMouseEnter={()=>{setHover(true);}}
            onMouseLeave={()=>{setHover(false)}}
              >
              <i 
                aria-hidden="true" 
                className="dropdown icon"
                onClick={()=>{setShow(!show)}}
                />
              {props.name}
              <div className={`ui right floated buttons fade left ${showClass} transition`}
                   style={{lineHeight:"36px"}}
                    >

                <span 
                    className="ui basic icon button" 
                    role="button"
                    onClick={()=>{setEdit(true)}}
                >
                    <i aria-hidden="true" className="setting icon"></i>
                </span>

                <span 
                    className="ui basic icon button" 
                    role="button"
                    onClick={()=>{setVisible(true)}}
                >
                    <i aria-hidden="true" className="trash icon"></i>
                </span>
              </div>
          </div>

          <div className={content} 
              style={{background:"white",borderRadius:"0px 0px 8px 8px"}}>
              <div className="ui segments" style={{border:"none",boxShadow:"none"}}>
                {renderUnit()}
                {renderHomeWork()}
              </div>

              <div style={{marginLeft: "16px"}}>
              <button className="ui orange basic button">
                  <i aria-hidden="true" className="tv icon"></i>
                  创建教学元素
              </button>

              <button className="ui orange basic button">
                  <i aria-hidden="true" className="pencil icon"></i>
                  创建作业
              </button>

              <button className="ui orange basic button">
                  <i aria-hidden="true" className="lab icon"></i>
                  团队实验
              </button>

              </div>
          </div>
        {visible?
            <DeleteModal
                label="删除章节"
                setVisible={setVisible}
                onPositiveButtonClick={deleteSection}
            />
            :null}
        {edit?
            <SectionModal
                setVisible={setEdit}
                id={props.id}
                name={props.name}
                currentId={props.currentId} 
                startDate={props.startDate}
                order = {props.orderId}
                endDate={props.endDate}
                intro = {props.intro}
                create={false}
            />
        :null}
      </div>
    )
}

export default Section;