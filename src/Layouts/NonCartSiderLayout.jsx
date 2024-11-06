import Header from '@/Components/Header';
import { Layout, Button } from 'antd';
import { Content } from 'antd/es/layout/layout';
import FooterComponent from '@/Components/Footer';
import { UnorderedListOutlined } from '@ant-design/icons';

import Sider from 'antd/es/layout/Sider';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

// eslint-disable-next-line react/prop-types
const NonCartSiderLayout = ({ children }) => {
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
    const [onHeader, setOnHeader] = useState(false);
    const [ad, setAd] = useState(() => {
        return adData[0];
    });
    const [closeAd, setCloseAd] = useState(() => {
        return JSON.parse(localStorage.getItem('Ads'));
    });
    useEffect(() => {
        let i = 0;
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
        <div className="!bg-white">
            <Layout className="bg-white w-full min-h-screen flex gap-4">
                <Sider className="!bg-white !max-w-64 !w-64 !flex-auto max-[830px]:hidden relative ">
                    <div className="sticky top-0 left-0">
                        <Header />
                        <img src="/ads/3.jpeg" alt="" className="w-full p-3" />
                    </div>
                </Sider>
                <Content>
                    <div className="flex justify-center h-full flex-wrap">
                        <Button
                            className="absolute right-2 top-2 max-[830px]:flex hidden z-20"
                            onClick={() => {
                                setOnHeader(!onHeader);
                            }}
                        >
                            <UnorderedListOutlined className="text-[16px]" />
                        </Button>
                        <Layout className="!bg-white">{children}</Layout>
                        <div className="md:w-4/5 max-[830px]:w-full">
                            <FooterComponent />
                        </div>
                    </div>
                </Content>
            </Layout>
            <div
                className={clsx('!bg-white !flex-auto ', {
                    ['sm:hidden md:hidden max-[830px]:hidden']: !onHeader,
                    ['max-[830px]:absolute max-[830px]:right-2 max-[830px]:top-2 max-[830px]:z-10 max-[830px]:drop-shadow-md']: onHeader,
                })}
            >
                <Header />
            </div>
            <div
                className={clsx('sticky w-[400px] bottom-0 left-0', {
                    ['hidden']: closeAd,
                })}
                onClick={handleClose}
            >
                <a href={ad.href} target="_blank">
                    <button className="text-black p-1 absolute top-0 right-0">X</button>
                    <img src={`/ads/${ad.img}.jpg`} alt="" className="w-full" />
                </a>
            </div>
        </div>
    );
};

export default NonCartSiderLayout;
