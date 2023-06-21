import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate, useSearchParams } from "react-router-dom";
import request, { get, post } from "../../service/axiosConfig";
import axios from "axios";

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
        // let response = await get("/api1/user/test2", { name: "小明", age: "18" });

        // 使用这里原生没问题
        // let response = await axios.get('/api1/user/test1', {
        //     params: { name: "小明", age: "18" }
        // })
        //     // .then(function (response) {
        //     //     console.info("调用接口成功....")
        //     //     console.log(response);
        //     // })
        //     // .catch(function (error) {
        //     //     console.info("调用接口异常....")
        //     //     console.log(error);
        //     // })
        //     // .finally(function () {
        //     //     console.info("调用接口finally....")
        //     //     // always executed
        //     // });
        // console.log("res=======: %o", response.data);

        request.get("/api1/user/test1", { params: { name: "小明", age: "18" } })
        .then(res => {
            console.log("res=======: %o", res.data);
        })
        .catch(err => {
            console.log("err=======: %o", err);
        });




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
