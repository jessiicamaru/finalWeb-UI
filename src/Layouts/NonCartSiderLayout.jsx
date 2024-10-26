import Header from '@/Components/Header';
import { Layout, Button } from 'antd';
import { Content } from 'antd/es/layout/layout';
import FooterComponent from '@/Components/Footer';
import { UnorderedListOutlined } from '@ant-design/icons';

import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';
import clsx from 'clsx';

// eslint-disable-next-line react/prop-types
const NonCartSiderLayout = ({ children }) => {
    const [onHeader, setOnHeader] = useState(false);

    return (
        <div>
            <Layout className="bg-white w-full min-h-screen flex gap-4">
                <Sider className="bg-white !max-w-64 !w-64 !flex-auto max-[640px]:hidden">
                    <Header />
                </Sider>
                <Content>
                    <div className="flex justify-center h-full flex-wrap">
                        <Button
                            className="absolute right-2 top-2 max-[640px]:flex hidden z-20"
                            onClick={() => {
                                setOnHeader(!onHeader);
                            }}
                        >
                            <UnorderedListOutlined className="text-[16px]" />
                        </Button>
                        <Layout className="!bg-white">{children}</Layout>
                        <div className="w-3/5 md:w-full max-[640px]:w-full">
                            <FooterComponent />
                        </div>
                    </div>
                </Content>
            </Layout>
            <div
                className={clsx('!bg-white !flex-auto ', {
                    ['sm:hidden md:hidden max-[640px]:hidden']: !onHeader,
                    ['max-[640px]:absolute max-[640px]:right-2 max-[640px]:top-2 max-[640px]:z-10 max-[640px]:drop-shadow-md']: onHeader,
                })}
            >
                <Header />
            </div>
        </div>
    );
};

export default NonCartSiderLayout;
