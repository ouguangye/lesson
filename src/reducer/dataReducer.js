export const dataReducer = (state={},action) =>{
    if(action.type==="DATA_REQUEST"){
        return {
            ...state,
            userName:action.payload.name,
            email:action.payload.email,
            phone:action.payload.phone,
            introduction:action.payload.introduction
        }
    }
    return state;
}