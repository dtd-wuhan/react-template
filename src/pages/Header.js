import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const menuList = [
    {
        label: "同步页面",
        key: "1"
    }, {
        label: "获取异步数据",
        key: "2"
    },
    {
        label: "渲染Cesium",
        key: "3"
    },
]


const PageHeader = () => {
    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={menuList}
                style={{
                    flex: 1,
                    minWidth: 0,
                }}
            />
        </Header>
    );
};

export default PageHeader;