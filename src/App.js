import React, { useEffect } from 'react';
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { Viewer } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import { getStudent, getState } from './selectors';
import { changeAge, changeSex } from './reducers';
import './App.less';

function App() {
  useEffect(() => {
    const viewer = new Viewer('cesiumContainer');

    return () => {
      viewer.destroy()
    }
  }, [])
  // const p = useSelector(getState)
  // console.log("🚀 ~ App ~ p:", p)

  const {name,age,sex} = useSelector(getStudent)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <div id="cesiumContainer" style={{ width: '500px', height: '500px' }} />;
      <header className="App-header">
        <div>name:{name}</div>
        <div>age:{age}</div>
        <div>sex:{sex}</div>
        <div>
          <Button style={{ marginRight: "10px" }} onClick={() => { dispatch(changeAge()) }}>Button</Button>
          <Button type='primary' onClick={() => { dispatch(changeSex({ sex: sex == "girl" ? "boy" : "girl" })) }}>Button</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
