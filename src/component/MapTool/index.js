import React, { useEffect } from 'react';
import { Viewer, Ion } from 'cesium';
import { config } from './config';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import style from './index.module.less'

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3MmY4OWI5NS1jYmRjLTRmNDEtOTc3Mi1hZDA0MmEwNzhiZjMiLCJpZCI6MTg5MTAxLCJpYXQiOjE3MDQ5NTI1NzB9.FCrykPmsDWRhmCWe_-P3yy0KD00Lg2mkbr0fg3ZFlpo'

const Map = () => {
    useEffect(() => {
        const viewer = new Viewer('cesiumContainer',{...config});

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