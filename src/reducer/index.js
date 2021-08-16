import { combineReducers } from "redux";
import {authReducer} from "./authReducer";
import {dataReducer} from "./dataReducer"
import { lessonReducer } from "./lessonReducer";
import { choiceReducer } from "./ChoiceReducer";
import { createReducer } from "./createReducer";
import { detailReducer } from "./detailReducer";

export default combineReducers({
    auth: authReducer,
    data: dataReducer,
    lesson: lessonReducer,
    choice:choiceReducer,
    create:createReducer,
    detail:detailReducer
})