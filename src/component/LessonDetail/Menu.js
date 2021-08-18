import React, { useState } from 'react';
import TaskModal from './TaskModal';
import moment from 'moment';

const Menu = props => {
    const [unitShow,setUnitShow] = useState(false);
    const [homeworkShow,setHomeWorkShow] = useState(false);

    const unitModal = () => {
        if(!unitShow)return;
        return (
            <TaskModal
                icon="tv icon"
                topText="创建教学元素"
                headerText = "教学资源"
                mainText = "教学资源简介"
                startDate={moment().format('YYYY-MM-DD hh:mm:ss')}
                endDate = ""
                intro=""
                name={props.name}
                currentId={props.currentId}
                setVisible={setUnitShow}
                choice = {true}
                id={props.id}
            />)
    }

    return(
        <div style={{marginLeft: "16px"}}>
            <button className="ui orange basic button"
                onClick={()=>{setUnitShow(true)}}>
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
            {unitModal()}
        </div>
    )
}

export default Menu;