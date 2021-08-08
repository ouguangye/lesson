export const authReducer = (state={},action)=>{
    if(action.type==="SIGN_IN"){
        console.log(action.payload);
        const respond = action.payload==="success"?true:false;
        return {...state,isSignIn:respond}
    }
    return state;
}