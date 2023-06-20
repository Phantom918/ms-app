import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate, useSearchParams } from "react-router-dom";
import request from "../../service/request";

import '../../styles/login.css';


/**
 * token 解析
 * @returns page
 */
const TokenAnalyze = () => {

    const navigate = useNavigate();

    // 从页面路径中获取参数(类似获取这里的code参数: http://localhost:3000/token?code=123456)
    let [searchParams, setSearchParams] = useSearchParams();
    let code = searchParams.get("code");
    console.info("==========code2: " + code)

    async function login() {
        console.info("开始调用接口....")
        let response = await request("/api2", {});
        console.log("res=======: " + response);
        // let resJson = await res.json();
        // console.log(resJson);
        // if (resJson.code === 200) {
        //     console.info("请求成功==========code: " + resJson.code);
        //     // localStorage.setItem("token", resJson.data.token);
        //     // navigate("/home");
        // } else {
        //     console.info("请求失败==========code: " + resJson.code);
        //     alert(resJson.message);
        // }
    }


    return (
        <div className="body_bg">
            <div className="content">
                {/* <Row justify="space-evenly" align="middle" style={{ background: 'hsla(0, 0%, 100%, 0.2)', borderRadius: '4%' }}> */}
                <Row justify="space-evenly" align="middle" className="form_bg">
                    <Col span={24} style={{ color: 'white' }}>
                        <h1>这个是token临时页面 code = {code}</h1>
                    </Col>
                    <Col span={24}>
                        <Button size="large" type="primary" htmlType="button" block onClick={login} > 登 录 </Button>
                    </Col>
                </Row>
            </div>

        </div>
    );
}

export default TokenAnalyze;
