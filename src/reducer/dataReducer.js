export const dataReducer = (state={},action) =>{
    if(action.type==="DATA_REQUEST"){
        return {...state,userName:action.payload.name}
    }
    return state;
}