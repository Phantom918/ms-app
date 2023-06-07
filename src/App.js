import { RouterProvider } from 'react-router-dom';
import React from 'react';

// 导入路由配置
import routerConfig from './config/RouterConfig';

function App() {
  return (
    <RouterProvider router={routerConfig} />
  );
}

export default App;
