import React from 'react';
import { Button, Result } from 'antd';
import { useRouteError } from 'react-router-dom';


const ErrorPage = () => {
    // 控制台打印错误信息
    let error = useRouteError();
    console.error(error);
    return (
        <Result status="500"
            title="500"
            subTitle="抱歉，服务异常请联系管理人员！"
            extra={<Button type="primary"> 返 回 </Button>}
        />
    )
}


export default ErrorPage;
