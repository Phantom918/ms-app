import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

// 中间正文内容组件
const ContentRight = () => {
    const { token: { colorBgContainer } } = theme.useToken();

    return (
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} items={[
                { title: 'Home', },
                { title: 'a1', },
                { title: 'a2', },
                { title: 'An Application', },
            ]} />
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                <Outlet />
            </div>
        </Content>
    )
}


export default ContentRight;