import * as allType from './actionCollection'

let initId = 0;

const addToDo = text => {
    return {
        type: allType.ADD_TODO,
        id: initId++,
        text
    }
}

export {
    addToDo
}