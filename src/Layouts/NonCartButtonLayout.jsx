import Header from '@/Components/Header';
import CartSider from '@/Components/CartSider';
import { Button, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

import Sider from 'antd/es/layout/Sider';
import FooterComponent from '@/Components/Footer';
import { ShoppingCartOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { useState } from 'react';
import clsx from 'clsx';

// eslint-disable-next-line react/prop-types
const NonCartButtonLayout = ({ children }) => {
    const [on, setOn] = useState(false);
    const [onHeader, setOnHeader] = useState(false);

    return (
        <div className="bg-white w-full min-h-screen flex gap-4 relative">
            <Layout className="bg-white w-full min-h-screen flex gap-4">
                <Sider className="bg-white !max-w-64 !w-64 !flex-auto max-[640px]:hidden">
                    <Header />
                </Sider>
                <Content className="flex flex-wrap ">
                    <Button
                        className="absolute right-2 top-2 xl:hidden lg:hidden 2xl:hidden z-20"
                        onClick={() => {
                            setOn(!on);
                        }}
                    >
                        <ShoppingCartOutlined className="text-[16px]" />
                    </Button>
                    <Button
                        className="absolute right-2 top-12 max-[640px]:flex hidden z-20"
                        onClick={() => {
                            setOnHeader(!onHeader);
                        }}
                    >
                        <UnorderedListOutlined className="text-[16px]" />
                    </Button>
                    <Layout>{children}</Layout>
                    <FooterComponent />
                </Content>
                <Sider className="!bg-white !max-w-[300px] !w-[300px] max-[640px]:hidden !flex-auto  sm:hidden md:hidden lg:block xl:block 2xl:block">
                    <CartSider noButton />
                </Sider>
            </Layout>
            <div
                className={clsx('!bg-white !max-w-[300px] !w-[300px] !flex-auto ', {
                    ['sm:hidden md:hidden max-[640px]:hidden']: !on,
                    ['md:absolute md:right-2 md:top-2 md:z-10 md:drop-shadow-md']: on,
                    ['sm:absolute sm:right-2 sm:top-2 sm:z-10 sm:drop-shadow-md']: on,
                    ['max-[640px]:absolute max-[640px]:right-2 max-[640px]:top-2 max-[640px]:z-10 max-[640px]:drop-shadow-md']: on,
                })}
            >
                <CartSider noButton />
            </div>
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
export default NonCartButtonLayout;
