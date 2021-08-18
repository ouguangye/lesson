import React,{useState} from 'react';
import lms from "../../api/lms";
import DeleteModal from "./DeleteModal";
import TaskModal from './TaskModal';
import { connect } from "react-redux";
import { teachList } from "../../actions";

const HomeWork = props => {
    const [homeworkShow,setHomeWorkShow] = useState(false);
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

    const deleteHomeWork = async() => {
        await lms.post(
            "/homework/deleteHomework?type=0",{},
            {
                params:{
                    id:props.id
                }
            }
        )
        setShowDelete(false);
        props.teachList(props.currentId);
    }

    const showDeleteModal = () => {
        if(!showDelete)return;
        return(
            <DeleteModal
                label = "删除作业"
                setVisible = {setShowDelete}
                onPositiveButtonClick={deleteHomeWork}
            />
        )
    }

    const homeworkModal = () => {
        if(!homeworkShow)return;
        return (
            <TaskModal
                icon="pencil icon"
                topText="编辑作业"
                headerText = "作业名称"
                mainText = "作业简介"
                startDate={props.startDate}
                endDate = {props.endDate}
                intro={props.intro}
                name={props.name}
                currentId={props.currentId}
                setVisible={setHomeWorkShow}
                id={props.sectionId}
                homeworkId ={props.id}
                href="/homework/saveHomework?type=0"
                choice = {2}
            />)
    }


    return (
        <div 
            className="ui segment" 
            style={style}
            onMouseEnter={()=>{setShowButton(true);}}
            onMouseLeave={()=>{setShowButton(false)}}
        >
            <span style={{lineHeight:"36px",color:"black"}}>
                <i 
                    aria-hidden="true" 
                    className="olive pencil icon"
                    style={{marginRight:"8px"}}
                ></i>
                {props.name}
            </span>

            <span style={{marginLeft:"16px"}}>
                <i 
                    aria-hidden="true" 
                    className="bell outline icon"
                    style={{marginRight:"8px"}}
                ></i>
                {`${props.endDate}之前交`}
            </span>

            <div className={`ui right floated buttons fade left ${status} transition`}>
                <span 
                    className="ui basic icon button" 
                    role="button"
                    onClick={()=>{setHomeWorkShow(true)}}
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
            {homeworkModal()}
        </div>
    )
}

export default connect(null,{teachList})(HomeWork);