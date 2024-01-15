import React, { useEffect } from 'react';
import { Viewer } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import './App.less';

const App = () => {
    useEffect(() => {
        const viewer = new Viewer('cesiumContainer');

        return () => {
            viewer.destroy()
        }
    }, [])

    return (
        <div className="App">
            <div id="cesiumContainer" style={{ width: '500px', height: '500px' }} />;
        </div>
    );
};

export default App;