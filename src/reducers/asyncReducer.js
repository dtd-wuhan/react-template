import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getList } from '../request/api'

export const fetchList = createAsyncThunk('fetch/async', async () => {
    const resp = await getList()

    return resp
})

const asyncListSlice = createSlice({
    name: "asyncReducer",
    initialState: {
        data: {}
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchList.pending, (state, action) => {
                console.log('pengding', action)
            })
            .addCase(fetchList.fulfilled, (state, action) => {
                const { payload } = action
                console.log('fuilled', action)
                state.data = payload
            }).addCase(fetchList.rejected, (state, action) => {
                console.log('rejected', action)
            })
    }
})

export default asyncListSlice.reducer