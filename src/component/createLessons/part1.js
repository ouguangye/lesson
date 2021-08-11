import React from 'react';
import PhotoContent from './photoContent';
import MenuTransition from './menuTransition';
import InfField from './InfField';
const Part1 = () => {
    return(
        <div className="ui grid">
           <PhotoContent/>
            <div className="eleven wide column">
                <div className="fields">
                    <div className="twelve wide field">
                        <label>课程名称</label>
                        <div className="ui input">
                            <input name="name" placeholder="新建课程班名称"
                                type="text"/>
                        </div>
                    </div>
                    <div className="field">
                        <label>公开课</label>
                        <div name="isOpen" role="listbox" aria-expanded="false"
                            className="ui selection dropdown" tabIndex="0" >
                            <div aria-atomic="true" aria-live="polite"
                                className="divider text" role="alert">
                                否
                            </div>
                            <i aria-hidden="true" className="dropsown icon"></i>
                            <div className="menu transition">
                               <MenuTransition/>
                            </div>
                        </div>
                    </div>
                </div>
                <InfField/>
            </div>
        </div>
    )
}
export default Part1;