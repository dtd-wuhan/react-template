import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MODAL_NULL } from '../../const/modal.const';
import { Modal } from 'antd';
import { setModal } from '../../reducers/modalReducer';

const EditModal = () => {
    const dispatch = useDispatch()

    const handleOk = () => {
        dispatch(setModal({ modalType: MODAL_NULL }))
    };
    const handleCancel = () => {
        dispatch(setModal({ modalType: MODAL_NULL }))
    };
    return (
        <Modal title="编辑" open={true} onOk={handleOk} onCancel={handleCancel}>
            <p>这是一个编辑模态框</p>
        </Modal>
    );
};
export default EditModal;