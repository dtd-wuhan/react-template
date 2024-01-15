import React, { useEffect } from 'react';
import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom'
import Normal from './pages/Normal'
import PageHeader from './pages/Header'
import './App.less';

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
          {/* <Routes>
            <Route path="/normal" component={<Normal />}></Route>
          </Routes> */}
          <Outlet></Outlet>
        </Layout>
      </Content>
    </Layout>
  );
};

export default App;