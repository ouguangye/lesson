import { combineReducers } from "redux";
import {authReducer} from "./authReducer";
import { infReducer } from "./infReducer";

export default combineReducers({
    auth: authReducer,
    inf: infReducer
})