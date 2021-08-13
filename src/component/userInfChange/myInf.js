import React from 'react';
import LeftPart from './leftPart';
import InfPart1 from './InfPart1';
import InfPart2 from './InfPart2';
import InfPart3 from './InfPart3';
import history from '../history';

const MyInf = () => {
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
                            <button type="submit" className="ui primary button">
                                更新个人信息
                            </button>
                            <button type="submit" className="ui cancel button"
                               onClick ={()=>{history.push("/main/lesson")}}  >
                                取消
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MyInf;