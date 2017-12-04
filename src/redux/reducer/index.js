//####合并所有的reducer

import { combineReducers } from "redux";   //combineReducers({...someReducer})来合并所有的reducer
import todo from "todo";

export default combineReducers({
    todo
});