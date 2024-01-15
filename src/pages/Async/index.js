import React from 'react';
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { getState } from '@/selectors';
import { fetchList } from '@/reducers/asyncReducer';
import style from './index.module.less'

const Async = () => {
    const p = useSelector(getState)
    console.log("🚀 ~ Async ~ p:", p)

    const dispatch = useDispatch()

    return (
        <div className={style.Async}>
            <Button type='primary' onClick={() => dispatch(fetchList())}>async</Button>
        </div>

    );
};

export default Async;