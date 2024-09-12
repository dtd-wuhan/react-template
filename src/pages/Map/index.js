import React, { useEffect } from 'react';
import style from './index.module.less'
import MapTool from '../../component/MapTool'

const Map = () => {
    return (
        <div className={style.MapContainer}>
            <MapTool />
        </div>
    );
};

export default Map;