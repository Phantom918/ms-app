import { Layout, theme, Avatar, Row, Col, Dropdown, Button } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header } = Layout;


const userItems = [
    { key: '1', label: ( <Link to="/userInfo">用户详情</Link>), },
    { key: '2', label: (<a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com"> 2nd menu item </a>), },
    { key: '3', label: (<a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com"> 3rd menu item </a>), },
];


const HeaderTop = () => {
    const { token: { colorBgContainer } } = theme.useToken();

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
