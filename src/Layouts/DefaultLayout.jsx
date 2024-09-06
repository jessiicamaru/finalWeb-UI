import style from './style.module.css';
import Header from '../Components/Header';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Divider, List, Space } from 'antd';

import Sider from 'antd/es/layout/Sider';
import clsx from 'clsx';

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
    const datalist = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];

    return (
        <Layout className={clsx(style.layoutContainer, 'white-background')}>
            <Sider className={style.sider}>
                <Header />
            </Sider>
            <Content>
                <Layout>{children}</Layout>
            </Content>
            <Sider className={clsx(style.siderCart, 'white-background')}>
                <Space
                    direction="vertical"
                    style={{
                        padding: '24px',
                    }}
                >
                    <Divider orientation="left">Your cart</Divider>
                    <List size="small" bordered dataSource={datalist} renderItem={(item) => <List.Item>{item}</List.Item>} />
                </Space>
            </Sider>
        </Layout>
    );
};

export default DefaultLayout;
