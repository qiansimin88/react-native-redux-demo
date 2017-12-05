import * as types from '../action/actionCollection'
//todo的reducer
const todo = ( state = {}, action ) => {
    switch (action.type) {
        case types.ADD_TODO: 
           console.log('reducer感应到了');
            return [
                ...state,
                {
                    text: action.text,
                    id: action.id,
                    competed: false
                }
            ]
        default:
            return state;
    }
}

export default todo;  