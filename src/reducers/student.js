import { ADD_AGE } from "../const/student.const"

const initState = {
    student: {
        name: "张三",
        age: 18
    }
}

 const student = (state = initState, action) => {
    const { type, playload } = action
    switch (type) {
        case ADD_AGE:
            return Object.assign({}, state, playload)
        default:
            return state
    }
}

export default student