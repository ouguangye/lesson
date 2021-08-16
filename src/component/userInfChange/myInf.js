import React from 'react';
import LeftPart from './leftPart';
import InfPart1 from './InfPart1';
import InfPart2 from './InfPart2';
import InfPart3 from './InfPart3';
import history from '../history';
import { connect } from 'react-redux';
import lms from '../../api/lms';
import { dataRequest } from "../../actions";


const MyInf = props => {
    const changeSumit = async(e) => {
        e.preventDefault();
        await lms.post(
            "/json/account/save",{},
            {
                params:{
                    name: props.name,
                    email: props.email,
                    phone: props.phone,
                    introduction: props.introduction
                }
            }
        )
        props.dataRequest();
        history.push("/main");
    }

    return (
        <React.Fragment>
            <br/><br/><br/><br/>
            <div className="ui grid">
                <LeftPart/>
                <div className="twelve wide column">
                    <div className="ui segment">
                        <form className="ui form">
                            <InfPart1/>
                            <InfPart2/>
                            <InfPart3/>
                            <button 
                             className="ui primary button"
                             onClick={e=>{changeSumit(e)}} >
                                更新个人信息
                            </button>
                            <button  className="ui cancel button"
                               onClick ={()=>{history.push("/main")}}  >
                                取消
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state =>{
    return{
        name: state.data.userName,
        email: state.data.email,
        phone: state.data.phone,
        introduction: state.data.introduction
    }
}

export default connect(mapStateToProps,{dataRequest})(MyInf);