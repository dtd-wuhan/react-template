import React, { useCallback, useEffect, useState } from 'react';
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import ReactJson from 'react-json-view';
import { getAsyncData } from '@/selectors';
import { fetchList } from '@/reducers/asyncReducer';
import { validateJSON } from '../../utils'
import style from './index.module.less'

const Async = () => {
    const { data } = useSelector(getAsyncData)

    const [jsonData, setJsonData] = useState({})

    useEffect(() => {
        let temp = validateJSON(data)
        console.log("🚀 ~ useEffect ~ data:", data)
        const d = temp ? JSON.parse(JSON.stringify(data)) : {}
        console.log("🚀 ~ useEffect ~ d:", d)

        setJsonData(d)
    }, [data])
    const dispatch = useDispatch()

    const fetch = useCallback(() => {
        dispatch(fetchList())
    })
    return (
        <div className={style.Async}>
            <Button type='primary' onClick={fetch}>async</Button>
            <div className={style.jsonContainer}>
                <ReactJson
                    src={jsonData}
                    displayDataTypes={false}
                />
            </div>
        </div>

    );
};

export default Async;