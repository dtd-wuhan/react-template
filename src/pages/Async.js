import React from 'react';
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import { getState } from '@/selectors';
import { fetchList } from '@/reducers/asyncReducer';
import './App.less';

const App = () => {
    const p = useSelector(getState)
    console.log("🚀 ~ App ~ p:", p)

    const dispatch = useDispatch()

    return (
        <div className="App">

            <Button onClick={() => dispatch(fetchList())}>async</Button>
        </div>

    );
};

export default App;