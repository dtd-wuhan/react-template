import { createSlice } from '@reduxjs/toolkit'

const studentSlice = createSlice({
    name: "student",
    initialState: {
        student: {
            name: "张三",
            age: 18,
            sex: 'boy'
        }
    },
    reducers: {
        changeSex(state, action) {
            const { sex } = action.payload
            state.student.sex = sex
            return state
        },
        changeAge(state) {
            state.student.age += 1
            return state
        }
    }
})

export const { changeAge, changeSex } = studentSlice.actions

export default studentSlice.reducer