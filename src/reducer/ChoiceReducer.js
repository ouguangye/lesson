export const choiceReducer = (state={},action) => {
    if(action.type==="CHANGE_CHOICE"){
        return {...state,choice:action.payload}
    }
    return state;
}