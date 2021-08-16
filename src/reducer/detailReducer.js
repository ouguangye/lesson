export const detailReducer = (state={},action)=>{
    switch(action.type){
        case "COURSE_DETAIL":return{...state,data:action.payload};
        case "TEACH_lIST": return {...state,list:action.payload};
        case "MESSAGE_LIST":return {...state,comments:action.payload}
        default:return state;
    }
}