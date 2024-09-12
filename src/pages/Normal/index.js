import React, { useState } from 'react';
import { Button, Divider, Radio } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { getStudent } from '@/selectors';
import { changeAge, changeSex } from '@/reducers/studentReducer';
import { setModal } from '@/reducers/modalReducer';
import { MODAL_ADD, MODAL_EDIT } from '../../const/modal.const';
import { EventBus } from '../../utils'
import style from './index.module.less'
import { Icon } from '../../component';

const Normal = () => {
    const { name, age, sex } = useSelector(getStudent)

    const dispatch = useDispatch()

    const [value, setValue] = useState(1);
    const onChange = (e) => {
        setValue(e.target.value);
        EventBus.emit('changeTheme', e.target.value == 1)
    }
    return (
        <div className={style.Normal}>
            <Icon name="shebeiyunweiguanli-x" />
            <Divider>读取并设置state的值</Divider>
            <div>name:{name}</div>
            <div>age:{age}</div>
            <div>sex:{sex}</div>
            <div className={style.btns}>
                <Button style={{ marginRight: "10px" }} onClick={() => { dispatch(changeAge()) }}>增加age</Button>
                <Button type='primary' onClick={() => { dispatch(changeSex({ sex: sex == "girl" ? "boy" : "girl" })) }}>改变性别</Button>
            </div>
            <Divider>调用显示不同的模态</Divider>
            <div className={style.btns}>
                <Button style={{ marginRight: "10px" }} onClick={() => { dispatch(setModal({ modalType: MODAL_ADD })) }}>打开新增模态</Button>
                <Button type='primary' onClick={() => { dispatch(setModal({ modalType: MODAL_EDIT })) }}>打开编辑模态</Button>
            </div>
            <Divider>主题切换</Divider>
            <div className={style.btns}>
                <span>主题:</span>
                <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>green</Radio>
                    <Radio value={2}>purple</Radio>
                </Radio.Group>
            </div>
        </div>
    );
};

export default Normal;