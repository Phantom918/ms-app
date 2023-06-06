import { Breadcrumb, Layout, theme } from 'antd';
import UserInfo from '../user/UserInfo';

const { Content } = Layout;

// 中间正文内容组件
const ContentRight = (props) => {

    const { token: { colorBgContainer } } = theme.useToken();

    return (
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }} >
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                {props.children}
            </div>
        </Content>
    )
}


export default ContentRight;