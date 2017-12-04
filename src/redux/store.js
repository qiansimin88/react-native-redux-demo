import { createStore } from "redux"; 
import reducer from './reducer';   //所有的reducer

// createStore(
//     reducer,  所有的reducer集合 可以用 combineReducers({reducer1,reducer2...})来和并所有的reducer,
//     instaState,  //初始化的state
//     增强器  通过applyMiddleware(...middlewares)来包中间件
// )

export default createStore(
    reducer,
    {}   //初始state
)   //返回一个store 并且全局就一个 store  

