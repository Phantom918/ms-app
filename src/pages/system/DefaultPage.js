import { Button, Result } from 'antd';

const DefaultPage = () => {
    return (
        <Result
            status="success"
            title="欢迎使用 ms-app"
            subTitle="这是一个默认页面，可以在 src/pages/system/DefaultPage.js 中修改。"
            extra={[
                <Button type="primary" key="console"> 返 回 </Button>,
                <Button key="buy"> 新 世 界 </Button>,
            ]}
        />
    )
}

export default DefaultPage;