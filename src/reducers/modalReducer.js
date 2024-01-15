import { createSlice } from '@reduxjs/toolkit'
import { MODAL_NULL } from '../const/modal.const'

const initialState = {
    modalType: MODAL_NULL,
    modalParams: {}
}

const modalSlice = createSlice({
    name: "modal",
    initialState: initialState,
    reducers: {
        setModal(state, action) {
            const { modalType, modalParams = {} } = action.payload

            return { modalType, modalParams }
        },
        resetModal() {
            return initialState
        }
    }
})

export const { setModal, resetModal } = modalSlice.actions

export default modalSlice.reducer