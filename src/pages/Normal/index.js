import React from 'react';
import { Button, Divider } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { getStudent } from '@/selectors';
import { changeAge, changeSex } from '@/reducers/studentReducer';
import { setModal } from '@/reducers/modalReducer';
import { MODAL_ADD, MODAL_EDIT } from '../../const/modal.const';
import style from './index.module.less'

const Normal = () => {
    const { name, age, sex } = useSelector(getStudent)

    const dispatch = useDispatch()

    return (
        <div className={style.Normal}>
            <div>name:{name}</div>
            <div>age:{age}</div>
            <div>sex:{sex}</div>
            <div className={style.btns}>
                <Button style={{ marginRight: "10px" }} onClick={() => { dispatch(changeAge()) }}>增加age</Button>
                <Button type='primary' onClick={() => { dispatch(changeSex({ sex: sex == "girl" ? "boy" : "girl" })) }}>改变性别</Button>
            </div>
            <Divider />
            <div className={style.btns}>
                <Button style={{ marginRight: "10px" }} onClick={() => { dispatch(setModal({ modalType: MODAL_ADD })) }}>打开新增模态</Button>
                <Button type='primary' onClick={() => { dispatch(setModal({ modalType: MODAL_EDIT })) }}>打开编辑模态</Button>
            </div>
        </div>
    );
};

export default Normal;