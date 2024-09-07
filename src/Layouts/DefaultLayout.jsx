import style from './style.module.css';
import Header from '@/Components/Header';
import CartSider from '@/Components/CartSider';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

import Sider from 'antd/es/layout/Sider';
import clsx from 'clsx';

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
    return (
        <Layout className={clsx(style.layoutContainer, 'white-background')}>
            <Sider className={clsx(style.sider, 'white-background')}>
                <Header />
            </Sider>
            <Content>
                <Layout>{children}</Layout>
            </Content>
            <Sider className={clsx(style.siderCart, 'white-background')}>
                <CartSider />
            </Sider>
        </Layout>
    );
};

export default DefaultLayout;
