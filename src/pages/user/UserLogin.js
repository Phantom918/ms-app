import React from "react";
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

import '../../styles/login.css';


/**
 * 用户登录
 * @returns page
 */
const UserLogin = () => {

    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="body_bg">
            <div className="content">
                {/* <Row justify="space-evenly" align="middle" style={{ background: 'hsla(0, 0%, 100%, 0.2)', borderRadius: '4%' }}> */}
                <Row justify="space-evenly" align="middle" className="form_bg">
                    <Col span={24} style={{ color: 'white' }}>
                        <h1>MS-APP</h1>
                    </Col>
                    <Col span={24}>
                        <Form name="basic"
                            // labelCol={{ span: 18, offset: 3 }}
                            wrapperCol={{ span: 18, offset: 3 }}
                            style={{ maxWidth: 600 }}
                            initialValues={{ remember: true, }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!', },]}>
                                <Input size="large" placeholder="用户名..." prefix={<UserOutlined />} />
                            </Form.Item>

                            <Form.Item name="password" rules={[{ required: true, message: '请输入密码!', },]}>
                                <Input.Password size="large" placeholder="密码..." prefix={<LockOutlined />} />
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 3, span: 6, }} >
                                <Checkbox style={{ color: "whitesmoke" }}>记住登录</Checkbox>
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 3, span: 18, }}>
                                <Button size="large" type="primary" htmlType="submit" block > 登 录 </Button>
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 3, span: 18, }}>
                                <Button size="large" type="dashed" htmlType="button" block ghost="true" onClick={() => navigate("/")}> 注 册 </Button>
                            </Form.Item>

                        </Form>
                    </Col>
                </Row>
            </div>

        </div>
    );
}

export default UserLogin;
