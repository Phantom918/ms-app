import { Layout, theme, Avatar, Row, Col, Dropdown } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const { Header } = Layout;


const userItems = [
    { key: '1', label: (<Link to="/main/userInfo">用户信息</Link>), },
    { key: '2', label: (<Link to="/main/userDetail">用户详情</Link>), },
    { key: '3', label: (<Link to="/main/error">错误页面</Link>), },
    { key: '4', label: (<Link to="/login">登录</Link>), },
];


const HeaderTop = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const navigate = useNavigate();

    return (
        <Header style={{ padding: 0, background: colorBgContainer }} >
            {/* 头像 */}
            {/* <Avatar src={url} /> */}
            <Row justify="end">
                <Col span={4} style={{ textAlign: 'center' }}>
                    {/* <Avatar size={'large'} draggable={'true'} style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>草</Avatar> */}
                    <Dropdown menu={{ items: userItems, }} placement="bottomRight" >
                        <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 48, xl: 48, xxl: 48, }} icon={<AntDesignOutlined />} />
                    </Dropdown>
                </Col>
            </Row>
        </Header >
    )


}


export default HeaderTop;
