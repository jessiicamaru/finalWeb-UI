import NonCartSiderLayout from '@/Layouts/NonCartSiderLayout';
import { Divider } from 'antd';
import { DownCircleOutlined } from '@ant-design/icons';
import { useState, memo } from 'react';
import clsx from 'clsx';

const FAQs = () => {
    const [open, setOpen] = useState([]);
    const faqs = [
        {
            question: 'How much is the train ticket?',
            answer: 'Isle seats are 350.000vnd and 450.000 for window seats.',
        },
        {
            question: 'How long does it take the train travel through all of stations?',
            answer: 'It takes a day to depart from Hanoi to Ho Chi Minh City.',
        },
        {
            question: 'Any discount for children?',
            answer: 'In case, children are under 6 years old, they are allowed aboard without tickets. Vice versa, children are over 6 years old have to buy tickets or they can afford half ticket, it means they can use any seats until the valid passengers aboard.',
        },
        {
            question: 'How can I aboard when I lose my ticket?',
            answer: 'If you book a ticket online, you can show the e-ticket to the attendant or you can print it out at the printer at any station.',
        },
        {
            question: 'Which cities do tourists can travel through?',
            answer: 'Train is operating in Ha Noi, Nam Dinh, Thanh Hoa, Nghe An, Quang Binh, Hue, Da Nang, Quang Ngai, Binh Dinh, Khanh Hoa, Phan Thiet, Binh Thuan, Sai Gon.',
        },
        {
            question: 'Are tourists being allowed to bring their pets?',
            answer: 'Tourists are allowed to bring their pets, but they have to be in cage to avoid annoy others passengers.',
        },
        {
            question: 'Any fees for returning a ticket?',
            answer: 'With a ticket being returned over 24 hours before departure, you have to pay an extra 10% of the cost.With a ticket being returned in 24 hours before departure, you have to pay extra 20% of the cost.',
        },
    ];

    return (
        <NonCartSiderLayout>
            <div className="bg-white px-[50px] my-6 flex justify-center flex-wrap max-[1023px]:px-[5%]">
                <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                <div className="w-4/5 flex flex-wrap mt-4 shadow-md p-4 pb-8 max-[1023px]:w-full">
                    {faqs.map((item, index) => {
                        return (
                            <div key={item.question} className="w-full transition-all">
                                <Divider orientation="left">
                                    <div className="text-[20px]">Q{index + 1}:</div>
                                </Divider>
                                <div className="w-full">
                                    <div className="w-full flex">
                                        <div
                                            className="w-[5%] cursor-pointer"
                                            onClick={() => {
                                                if (!open.includes(index + 1)) {
                                                    setOpen([...open, index + 1]);
                                                }
                                            }}
                                        >
                                            <DownCircleOutlined className="text-[#1677ff] text-[20px] w-full" />
                                        </div>
                                        <div className="flex-1">
                                            <strong>{item.question}</strong>
                                            <div
                                                className={clsx('mt-2', {
                                                    'h-auto': open.includes(index + 1),
                                                    'h-[0px] overflow-hidden': !open.includes(index + 1),
                                                })}
                                            >
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </NonCartSiderLayout>
    );
};

export default memo(FAQs);
