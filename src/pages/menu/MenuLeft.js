import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';

const { Sider } = Layout;


function getItem(label, key, icon, children) {
    return { key, icon, children, label };
}

const menuItems = [
    getItem('菜单1', '1', <PieChartOutlined />),
    getItem('菜单2', '2', <DesktopOutlined />),
    getItem('用户管理', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('团队管理', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('文件管理', '9', <FileOutlined />),
];

// 左侧主菜单组件
const MenuLeft = () => {
    const [collapsed, setCollapsed] = useState(false);

    // 点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。
    const rootSubmenuKeys = ['1', '2', 'sub1', 'sub2', '9'];
    const [openKeys, setOpenKeys] = useState(['1']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" mode="inline" items={menuItems} openKeys={openKeys} onOpenChange={onOpenChange} />
        </Sider>
    );
}

export default MenuLeft;