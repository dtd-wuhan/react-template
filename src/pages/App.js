import React, { useEffect, useState } from 'react';
import { ConfigProvider, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom'
import PageHeader from './Header'
import IndexModal from '../component/Modals'
import green_theme from '../theme/green-theme'
import purple_theme from '../theme/purple-theme'
import { EventBus } from '../utils'

const { Content } = Layout;

const App = () => {
  const [globalTheme, setGlobalTheme] = useState(green_theme)
  EventBus.on('changeTheme', (flag) => {
    console.log("🚀 ~ EventBus.on ~ flag:", flag)
    setGlobalTheme(flag ? green_theme : purple_theme)
  })
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ConfigProvider theme={{ token: { ...globalTheme } }}>
      <Layout>
        <PageHeader />
        <Content
          style={{
            padding: '24px',
          }}
        >
          <Layout
            style={{
              padding: '24px 0',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet></Outlet>
          </Layout>
        </Content>
        <IndexModal />
      </Layout>
    </ConfigProvider>
  );
};

export default App;