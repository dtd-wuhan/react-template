import React, { useEffect } from 'react';
import { Viewer } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import style from './index.module.less'

const Map = () => {
    useEffect(() => {
        const viewer = new Viewer('cesiumContainer');

        return () => {
            viewer.destroy()
        }
    }, [])

    return (
        <div className={style.Map}>
            <div id="cesiumContainer" style={{ width: '800px', height: '450px' }} />;
        </div>
    );
};

export default Map;