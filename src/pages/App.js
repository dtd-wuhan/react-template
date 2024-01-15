import React, { useEffect } from 'react';
import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom'
import PageHeader from './Header'
import IndexModal from '../component/Modals'

const { Content } = Layout;

const App = () => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
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
  );
};

export default App;