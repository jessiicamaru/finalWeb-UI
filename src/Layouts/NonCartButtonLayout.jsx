import Header from '@/Components/Header';
import CartSider from '@/Components/CartSider';
import { Button, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

import Sider from 'antd/es/layout/Sider';
import FooterComponent from '@/Components/Footer';
import { ShoppingCartOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

// eslint-disable-next-line react/prop-types
const NonCartButtonLayout = ({ children }) => {
    const adData = [
        {
            img: '1',
            href: 'https://ketnoidisan.dsvn.vn/',
        },
        {
            img: '2',
            href: 'https://cloud.news.vinpearl.com/Vinpearl_DSVN',
        },
    ];
    const [on, setOn] = useState(false);
    const [onHeader, setOnHeader] = useState(false);
    const [ad, setAd] = useState(() => {
        return adData[0];
    });
    const [closeAd, setCloseAd] = useState(() => {
        return JSON.parse(localStorage.getItem('Ads'));
    });
    useEffect(() => {
        let i = 1;
        const timerId = setInterval(() => {
            i = (i + 1) % 2;
            setAd(adData[i]);
        }, 3000);

        return () => {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClose = () => {
        setCloseAd(!closeAd);
        localStorage.setItem('Ads', true);
    };

    return (
        <div className="bg-white w-full min-h-screen flex gap-4 relative">
            <Layout className="bg-white w-full min-h-screen flex gap-4">
                <Sider className="!bg-white !max-w-64 !w-64 !flex-auto max-[830px]:hidden">
                    <Header />
                    <img src="/ads/3.jpeg" alt="" className="w-full p-3" />
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
                        className="absolute right-2 top-12 max-[830px]:flex hidden z-20"
                        onClick={() => {
                            setOnHeader(!onHeader);
                        }}
                    >
                        <UnorderedListOutlined className="text-[16px]" />
                    </Button>
                    <Layout>{children}</Layout>
                    <FooterComponent />
                </Content>
                <Sider className="!bg-white !max-w-[300px] !w-[300px] max-[830px]:hidden !flex-auto  sm:hidden md:hidden lg:block xl:block 2xl:block">
                    <CartSider noButton />
                </Sider>
            </Layout>
            <div
                className={clsx('!bg-white !max-w-[300px] !w-[300px] !flex-auto ', {
                    ['sm:hidden md:hidden max-[830px]:hidden']: !on,
                    ['md:absolute md:right-2 md:top-2 md:z-10 md:drop-shadow-md']: on,
                    ['sm:absolute sm:right-2 sm:top-2 sm:z-10 sm:drop-shadow-md']: on,
                    ['max-[830px]:absolute max-[830px]:right-2 max-[830px]:top-2 max-[830px]:z-10 max-[830px]:drop-shadow-md']: on,
                })}
            >
                <CartSider noButton />
            </div>
            <div
                className={clsx('!bg-white !flex-auto ', {
                    ['sm:hidden md:hidden max-[830px]:hidden']: !onHeader,
                    ['max-[830px]:absolute max-[830px]:right-2 max-[830px]:top-2 max-[830px]:z-10 max-[830px]:drop-shadow-md']: onHeader,
                })}
            >
                <Header />
            </div>
            <div
                className={clsx('absolute w-[400px] bottom-0 left-0', {
                    ['hidden']: closeAd,
                })}
                onClick={handleClose}
            >
                <a href={ad.href} target="_blank">
                    <button
                        className={clsx('text-black p-1 absolute top-0 right-0', {
                            ['hidden']: closeAd,
                        })}
                    >
                        X
                    </button>
                    <img src={`/ads/${ad.img}.jpg`} alt="" className="w-full" />
                </a>
            </div>
        </div>
    );
};
export default NonCartButtonLayout;
