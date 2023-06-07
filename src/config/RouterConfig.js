import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

// 页面总布局
import AppLayout from '../pages/menu/AppLayout';

// 用户相关页面
import UserInfo from '../pages/user/UserInfo';
import UserDetail from '../pages/user/UserDetail';

// 系统相关页面
import ErrorPage from '../pages/system/ErrorPage';
import DefaultPage from '../pages/system/DefaultPage';

// 路由配置
const routerConfig = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />} errorElement={<ErrorPage />} >
            <Route path="userInfo" element={<UserInfo />} />
            <Route path="userDetail" element={<UserDetail />} />
            {/* 报错时展示页面 */}
            <Route path="error" element={<ErrorPage />} />
            {/* 默认展示页面 */}
            <Route index element={<DefaultPage />} />
        </Route>
    )
);



export default routerConfig;