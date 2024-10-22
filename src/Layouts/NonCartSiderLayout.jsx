import Header from '@/Components/Header';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

import Sider from 'antd/es/layout/Sider';

// eslint-disable-next-line react/prop-types
const NonCartSiderLayout = ({ children }) => {
    return (
        <Layout className="bg-white w-full min-h-screen flex gap-4">
            <Sider className="bg-white !max-w-64 !w-64 !flex-auto">
                <Header />
            </Sider>
            <Content>
                <div className="flex justify-center h-full">
                    <Layout className="!bg-white">{children}</Layout>
                </div>
            </Content>
        </Layout>
    );
};

export default NonCartSiderLayout;
