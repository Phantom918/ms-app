import React from "react"
import { Layout } from 'antd';

import MenuLeft from "./MenuLeft"
import HeaderTop from "./HeaderTop"
import ContentRight from "./ContentRight"
import FooterBottom from "./FooterBottom"

// 
const AppLayout = (props) => {

    console.log('AppLayout => props:', props.children);

    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
                {/* 左侧主菜单 */}
                <MenuLeft />
                <Layout>
                    {/* 顶部头信息 */}
                    <HeaderTop />
                    {/* 中间正文显示内容 */}
                    <ContentRight childrenLayout={props.children} />
                    {/* 页面底部 */}
                    <FooterBottom />
                </Layout>
            </Layout>
        </div>
    )

}

export default AppLayout;