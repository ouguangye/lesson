import { useState } from "react";
import lms from "../../api/lms";
import DeleteModal from "./DeleteModal";
import { connect } from "react-redux";
import { teachList } from "../../actions";
import TaskModal from "./TaskModal";

const Unit = props => {
    const [unitShow,setUnitShow] = useState(false);
    const [showButton,setShowButton] = useState(false);
    const [showDelete,setShowDelete] = useState(false);
    const color = showButton?"rgba(51,37,174,0.04)":"white";
    const status = showButton?"visible":"hidden";
    const style = {
        padding: "4px 16px",
        cursor:"pointer",
        borderRadius:"4px",
        background:color
    }
   
    const unitModal = () => {
        if(!unitShow)return;
        return (
            <TaskModal
                icon="tv icon"
                topText="编辑教学元素"
                headerText = "教学资源"
                mainText = "教学资源简介"
                startDate={props.startDate}
                endDate = {props.endDate}
                intro={props.intro}
                name={props.name}
                currentId={props.currentId}
                setVisible={setUnitShow}
                id={props.sectionId}
                unitId ={props.id}
                href="/json/creator/saveUnit"
                choice = {1}
            />)
    }

    const showDeleteModal = () => {
        if(!showDelete)return;
        return(
            <DeleteModal
                label = "删除教学元素"
                setVisible = {setShowDelete}
                onPositiveButtonClick={deleteUnit}
            />
        )
    }

    const deleteUnit = async () => {
        await lms.post(
            "/json/creator/deleteUnit",{},
            {
                params:{
                    id:props.id
                }
            }
        )
        setShowDelete(false);
        props.teachList(props.currentId);
    }

    return (
        <div className="ui segment ellipsis" 
             style={style}
             onMouseEnter={()=>{setShowButton(true);}}
             onMouseLeave={()=>{setShowButton(false)}}
        >
            <span style={{lineHeight:"40px", color:"black"}}>
                <i 
                    aria-hidden="true" 
                    className="blue book icon"
                    style={{marginRight:"8px"}}
                />
                <span>{props.name}</span>
            </span>
            <div className={`ui right floated buttons fade left ${status} transition`}>
                <span 
                    className="ui basic icon button" 
                    role="button"
                    onClick={()=>{setUnitShow(true)}}
                >
                    <i aria-hidden="true" className="edit icon"></i>
                </span>

                <span 
                    className="ui basic icon button" 
                    role="button"
                    onClick={()=>{setShowDelete(true)}}
                >
                    <i aria-hidden="true" className="trash icon"></i>
                </span>
            </div>
            {showDeleteModal()}
            {unitModal()}
        </div>
        )
}

export default connect(null,{teachList})(Unit);