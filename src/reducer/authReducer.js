export const authReducer = (state={},action)=>{
    if(action.type==="SIGN_IN"){
        const respond = action.payload==="success"?true:false;
        if(respond)return {...state,isSignIn:respond,error:null}
        else {
            const error = displayError();
            return {...state,isSignIn:respond,error:error}
        }
    }
    return state;
}

const displayError = () =>{
    return(
        <div className="ui error visible message">
            <div className="content">
                用户名/密码不匹配
            </div>
        </div>
    )
}