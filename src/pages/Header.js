import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const menuList = [
    {
        label: "同步页面",
        key: "1",
        url: "/normal"
    }, {
        label: "获取异步数据",
        key: "2",
        url: '/async'
    },
    {
        label: "渲染Cesium",
        key: "3",
        url: '/map'
    },
]


const PageHeader = () => {
    const navigate = useNavigate()

    const onClick = ({ key }) => {
        const url = menuList.filter(i => i.key == key)[0]['url']
        navigate(url)
    }

    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Menu
                mode="horizontal"
                onClick={onClick}
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