import Header from '@/Components/Header';
import CartSider from '@/Components/CartSider';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

import Sider from 'antd/es/layout/Sider';

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
    return (
        <Layout className="bg-white w-full min-h-screen flex gap-4">
            <Sider className="bg-white !max-w-64 !w-64 !flex-auto">
                <Header />
            </Sider>
            <Content>
                <Layout>{children}</Layout>
            </Content>
            <Sider className="!bg-white !max-w-[300px] !w-[300px] !flex-auto">
                <CartSider />
            </Sider>
        </Layout>
    );
};

export default DefaultLayout;
