import React from 'react';
import LeftPart from './leftPart';
import InfPart1 from './InfPart1';

const MyInf = () => {
    return (
        <React.Fragment>
            <br/><br/><br/><br/>
            <div className="ui grid">
                <LeftPart/>
                <div className="twelve wide column">
                    <div className="ui segment">
                        <form className="ui form">
                            <div className="fields">
                                <InfPart1/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MyInf;