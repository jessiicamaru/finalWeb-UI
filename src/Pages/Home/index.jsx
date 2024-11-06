import NonCartSiderLayout from '@/Layouts/NonCartSiderLayout';
import { Button } from 'antd';
import { useEffect, useState, memo } from 'react';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';

import Card from './Card';
import NewsItem from './NewsItem';
import StationGroup from './StationGroup';
import { HalfStarSVG, StarSVG } from './SVG';

const Home = () => {
    const banner = ['/banner/banner1.jpg', '/banner/banner2.jpg', '/banner/banner3.jpg'];
    const slide = ['/slide/1.jpg', '/slide/2.jpg', '/slide/3.jpg', '/slide/4.jpg'];
    const cartData = [
        {
            img: '2',
            title: 'Select itinerary',
            content: 'Select departure station, arrival station, departure date, return date (if any)',
        },
        {
            img: '3',
            title: 'Select seat',
            content: 'Select seat, enter customer information',
        },
        {
            img: '1',
            title: 'Pay and receive e-ticket',
            content: 'Choose the appropriate payment method, e-ticket will be sent to email',
        },
    ];
    const postData = [
        {
            img: '1',
            title: 'Cheap Train Tickets from Saigon to Quang Ngai From Only 422,000 VND',
            content:
                'Train tickets from Saigon to Quang Ngai from only 422,000 VND/trip. Book train tickets at vetauduongsat.com to easily look up information about ticket prices, train schedules, how to book tickets online, promotions... Support hotline 1900599997.',
        },
        {
            img: '2',
            title: 'How to Send Goods by Train in Detail: Procedures and Price List',
            content:
                'Safe, on time, cheap, simple procedures... are the reasons why many passengers choose to send goods by train. Join vetauduongsat to learn how to send goods by train in detail in the following article.',
        },
        {
            img: '3',
            title: 'Learn About The History Of The Vietnam Railway Industry',
            content:
                'Join vetauduongsat to learn about the history of the Vietnamese railway industry, its development stages, infrastructure structure and station classification in the following article.',
        },
        {
            img: '4',
            title: 'Saigon-Dieu Tri Train Tickets Book Online Receive Electronic Tickets Immediately',
            content:
                'Saigon - Dieu Tri train tickets at attractive prices, book tickets online in just 3 simple steps and receive electronic tickets immediately, no need to wait in line to buy tickets. Support hotline 1900599997.',
        },
        {
            img: '5',
            title: 'Cheap Train Tickets Saigon Ninh Hoa From 190,000 VND',
            content:
                'Train tickets from Saigon to Ninh Hoa range from 190,000 VND/trip. There are about 4 trains per day from Saigon station to Ninh Hoa station (Nha Trang). Hotline for ticket booking support: 1900599997.',
        },
        {
            img: '6',
            title: 'Cheap 5-Star Train Tickets Saigon - Da Nang',
            content:
                'Latest Saigon - Da Nang train ticket price list, cheap 5-star Saigon - Da Nang train tickets online and instructions for booking tickets online. Contact hotline 1900599997 for 24/7 support.',
        },
    ];

    const [path, setPath] = useState(banner[0]);

    const [slideImg, setSlideImg] = useState({
        first: 1,
        second: 2,
    });
    const handleNext = () => {
        setSlideImg({
            first: slideImg.second,
            second: (slideImg.second + 1) % 4,
        });
    };
    const handlePrev = () => {
        console.log(slideImg);
        if (slideImg.first - 1 < 0) {
            setSlideImg({
                second: slideImg.first,
                first: slideImg.first + 4 - 1,
            });
        } else
            setSlideImg({
                second: slideImg.first,
                first: slideImg.first - 1,
            });
    };

    useEffect(() => {
        const timerId = setInterval(() => {
            setSlideImg({
                first: slideImg.second,
                second: (slideImg.second + 1) % 4,
            });
        }, 4000);

        return () => {
            clearInterval(timerId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        let i = 0;
        const timerId = setInterval(() => {
            i = (i + 1) % 3;
            setPath(banner[i]);
        }, 2000);

        return () => {
            clearInterval(timerId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <NonCartSiderLayout>
            <div className="w-full px-6">
                <img src={path} className="w-full" alt="" />
                <h2 className="text-xl font-bold w-full text-center my-6">Platform connecting users with DSVN</h2>
                <div className="flex gap-2 max-[1023px]:flex-wrap">
                    {cartData.map((data, index) => {
                        return <Card data={data} key={index} />;
                    })}
                </div>

                <div className="w-full h-64 max-[1023px]:h-48 relative flex mt-6 gap-2">
                    <Button className="absolute left-0 translate-x-[-30%] top-1/2 translate-y-[-50%]" onClick={handlePrev}>
                        <CaretLeftOutlined />
                    </Button>
                    <Button className="absolute right-0 translate-x-[30%] top-1/2 translate-y-[-50%]" onClick={handleNext}>
                        <CaretRightOutlined />
                    </Button>
                    <div className="w-1/2 h-full flex justify-center max-[768px]:w-full">
                        <img className="h-full" src={slide[slideImg.first]} alt="" />
                    </div>
                    <div className="w-1/2 h-full flex justify-center max-[768px]:hidden">
                        <img className="h-full" src={slide[slideImg.second]} alt="" />
                    </div>
                </div>

                <StationGroup />

                <div className="max-[1023px]:mt-[624px] max-sm:flex max-sm:flex-wrap max-sm:justify-center  max-sm:mt-[650px]">
                    <h2 className="text-3xl w-full text-center my-6">Railway News</h2>
                    <div className="flex flex-wrap max-sm:justify-center ">
                        {postData.map((item, index) => {
                            return <NewsItem data={item} key={index * 10} />;
                        })}
                    </div>
                </div>

                <div className="w-full flex justify-center mt-6 flex-wrap">
                    <h2 className="text-center font-bold text-[36px] w-[80%] max-[1023px]:max-w-[95%] max-[1023px]:text-[30px]">
                        Our travelers reviews about the ride with Vietnam Railways
                    </h2>

                    <div className="w-full shadow-md">
                        <div className="w-auto gap-2 shadow flex pt-8 pb-5 pl-8 pr-9 ">
                            <div className="w-[40%] flex h-[64px] items-center max-[1023px]:flex-wrap max-[1023px]:h-[80px]">
                                <div className="text-[36px] font-bold mr-4">4.56</div>
                                <div className="flex">
                                    <div className="h-full flex items-center">
                                        <StarSVG width={30} color={'#1677ff'} />
                                    </div>
                                    <div className="h-full flex items-center">
                                        <StarSVG width={30} color={'#1677ff'} />
                                    </div>
                                    <div className="h-full flex items-center">
                                        <StarSVG width={30} color={'#1677ff'} />
                                    </div>
                                    <div className="h-full flex items-center">
                                        <StarSVG width={30} color={'#1677ff'} />
                                    </div>
                                    <div className="h-full flex items-center">
                                        <HalfStarSVG width={30} color={'#1677ff'} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 text-[20px] max-[1023px]:text-[16px] flex items-center">
                                Based on 122 reviews from Bookaway users who traveled with Vietnam Railways
                            </div>
                        </div>
                        {/* feed back */}
                        <div className="w-auto gap-2 shadow flex pt-8 pb-5 pl-8 pr-9">
                            <div className="w-[40%] flex h-[64px] items-center">
                                <div className="w-full">
                                    <div className="h-full flex">
                                        <div className="h-full flex items-center">
                                            <StarSVG width={13} color={'#1677ff'} />
                                        </div>
                                        <div className="h-full flex items-center">
                                            <StarSVG width={13} color={'#1677ff'} />
                                        </div>
                                        <div className="h-full flex items-center">
                                            <StarSVG width={13} color={'#1677ff'} />
                                        </div>
                                        <div className="h-full flex items-center">
                                            <StarSVG width={13} color={'#1677ff'} />
                                        </div>
                                        <div className="h-full flex items-center">
                                            <StarSVG width={13} color={'#1677ff'} />
                                        </div>
                                    </div>

                                    <div className="font-bold leading-loose text-[16px]">Philipp E.</div>
                                    <div className="text-[16px] text-[#515151]">
                                        02.08.2023{' '}
                                        <a className="ml-3 underline" href="/search">
                                            Vietnam Railways
                                        </a>
                                    </div>
                                </div>
                                <div className="text-[36px] font-bold mr-4"></div>
                            </div>
                            <div className="flex-1 text-[16px] flex items-center text-[#515151]">Lohnenswerte Fahrt durch schöne Landschaften</div>
                        </div>

                        <div className="w-auto gap-2 shadow flex pt-8 pb-5 pl-8 pr-9">
                            <div className="w-[40%] flex h-[64px] items-center">
                                <div className="w-full">
                                    <div className="h-full flex">
                                        <div className="h-full flex items-center">
                                            <StarSVG width={13} color={'#1677ff'} />
                                        </div>
                                        <div className="h-full flex items-center">
                                            <StarSVG width={13} color={'#1677ff'} />
                                        </div>
                                        <div className="h-full flex items-center">
                                            <StarSVG width={13} color={'#1677ff'} />
                                        </div>
                                        <div className="h-full flex items-center">
                                            <StarSVG width={13} color={'#1677ff'} />
                                        </div>
                                        <div className="h-full flex items-center">
                                            <StarSVG width={13} color={'#1677ff'} />
                                        </div>
                                    </div>

                                    <div className="font-bold leading-loose text-[16px]">Leisa K.</div>
                                    <div className="text-[16px] text-[#515151]">
                                        27.07.2023{' '}
                                        <a className="ml-3 underline" href="/search">
                                            Vietnam Railways
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 text-[16px] flex items-center text-[#515151]">Best train ride ever!!</div>
                        </div>

                        <div className="w-auto gap-2 shadow flex pt-8 pb-5 pl-8 pr-9">
                            <div className="w-[40%] flex h-[64px] items-center">
                                <div className="w-full">
                                    <div className="h-full flex">
                                        <div className="h-full flex items-center">
                                            <StarSVG width={13} color={'#1677ff'} />
                                        </div>
                                        <div className="h-full flex items-center">
                                            <StarSVG width={13} color={'#1677ff'} />
                                        </div>
                                        <div className="h-full flex items-center">
                                            <StarSVG width={13} color={'#1677ff'} />
                                        </div>
                                        <div className="h-full flex items-center">
                                            <StarSVG width={13} color={'#1677ff'} />
                                        </div>
                                        <div className="h-full flex items-center">
                                            <StarSVG width={13} color={'#1677ff'} />
                                        </div>
                                    </div>

                                    <div className="font-bold leading-loose text-[16px]">Anze T.</div>
                                    <div className="text-[16px] text-[#515151]">
                                        19.07.2023{' '}
                                        <a className="ml-3 underline" href="/search">
                                            Vietnam Railways
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 text-[16px] flex items-center text-[#515151]">It was cosy and nice.</div>
                        </div>

                        <div className="w-auto gap-2 shadow flex pt-8 pb-5 pl-8 pr-9">
                            <div className="w-[40%] flex h-[64px] items-center">
                                <div className="w-full">
                                    <div className="h-full flex">
                                        <div className="h-full flex items-center">
                                            <StarSVG width={13} color={'#1677ff'} />
                                        </div>
                                        <div className="h-full flex items-center">
                                            <StarSVG width={13} color={'#1677ff'} />
                                        </div>
                                        <div className="h-full flex items-center">
                                            <StarSVG width={13} color={'#1677ff'} />
                                        </div>
                                        <div className="h-full flex items-center">
                                            <StarSVG width={13} color={'#1677ff'} />
                                        </div>
                                        <div className="h-full flex items-center">
                                            <StarSVG width={13} color={'#1677ff'} />
                                        </div>
                                    </div>

                                    <div className="font-bold leading-loose text-[16px]">Raymond K.</div>
                                    <div className="text-[16px] text-[#515151]">
                                        11.07.2023{' '}
                                        <a className="ml-3 underline" href="/search">
                                            Vietnam Railways
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 text-[16px] flex items-center text-[#515151]">
                                The trip totally exceeded our expectations! We had such a great, funny and informative guide and got many local snacks
                                on the way. Hopefully Blaire will be your guide.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center mt-6">
                    <Button className="w-3/5" size="large" type="primary">
                        <a href="/search" className="w-full h-full block ">
                            Book ticket now!
                        </a>
                    </Button>
                </div>
            </div>
        </NonCartSiderLayout>
    );
};

export default memo(Home);
