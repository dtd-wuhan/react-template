import React from 'react';
import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import theme from './theme/theme';
import { store, persistor } from './store'
import router from './router';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConfigProvider theme={{ token: { ...theme } }}>
        <RouterProvider router={router}></RouterProvider>
      </ConfigProvider>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
