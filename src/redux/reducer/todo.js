import * as types from '../action/actionCollection'
//todo的reducer
const todo = ( state = {}, action ) => {
    switch (action.type) {
        case types.ADD_TODO: 
            return {
                '加':1
            }
        default:
            return state;
    }
}

export default todo;  