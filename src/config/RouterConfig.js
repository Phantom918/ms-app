import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";

// 页面总布局
import AppLayout from '../pages/menu/AppLayout';

// 用户相关页面
import UserInfo from '../pages/user/UserInfo';
import UserDetail from '../pages/user/UserDetail';
import UserLogin from '../pages/user/UserLogin';
import TokenAnalyze from '../pages/user/TokenAnalyze';

// 系统相关页面
import ErrorPage from '../pages/system/ErrorPage';
import DefaultPage from '../pages/system/DefaultPage';

// 路由配置
const routerConfig = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" errorElement={<ErrorPage />} >
            <Route path="main" element={<AppLayout />} >
                <Route path="userInfo" element={<UserInfo />} />
                <Route path="userDetail" element={<UserDetail />} />
                {/* 报错时展示页面 */}
                <Route path="error" element={<ErrorPage />} />
                {/* 默认展示页面 */}
                <Route index element={<DefaultPage />} />
            </Route>
            <Route path="login" element={<UserLogin />} />
            <Route path="token" element={<TokenAnalyze />} />
            <Route index element={<Navigate to="/main" />} />
        </Route>

    )
);



export default routerConfig;