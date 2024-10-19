import style from './style.module.css';
import Header from '@/Components/Header';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

import Sider from 'antd/es/layout/Sider';
import clsx from 'clsx';

// eslint-disable-next-line react/prop-types
const NonCartSiderLayout = ({ children }) => {
    return (
        <Layout className={clsx(style.layoutContainer, 'white-background')}>
            <Sider className={clsx(style.sider, 'white-background')}>
                <Header />
            </Sider>
            <Content>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                    }}
                >
                    <Layout className="white-background">{children}</Layout>
                </div>
            </Content>
        </Layout>
    );
};

export default NonCartSiderLayout;
