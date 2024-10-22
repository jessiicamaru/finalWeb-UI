import { Form, Input, Button } from 'antd';
import NonCartSiderLayout from '@/Layouts/NonCartSiderLayout';
import { useState } from 'react';
import axios from '@/config/axios';
import CartItem from '@/Components/CartSider/CartItem';
import { checkCost } from '@/utils/checkCost';

const BookingInfo = () => {
    const [bookingCode, setBookingCode] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [list, setList] = useState(null);

    const getTicket = async () => {
        let response = await axios.post(import.meta.env.VITE_API_URL_V1 + '/getTicket', {
            data: {
                bookingCode,
                phone,
                email,
            },
        });

        console.log(response.data.list);
        response.data.list && setList(response.data.list);
    };
    const reSendCode = () => {};

    return (
        <>
            <NonCartSiderLayout>
                <div className="bg-white px-[50px] mt-6">
                    <h2 className="text-2xl font-bold">Enter your booking code, email and phone number to track your booking status</h2>
                    <h3 className="mt-6 text-xl font-bold">To look up the reservation, please enter 3 following items exactly :</h3>
                </div>

                <div className="bg-white flex px-[50px] py-6 items-center justify-center">
                    <Form
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 12,
                        }}
                        layout="horizontal"
                        className="min-w-[80%]"
                    >
                        <Form.Item
                            label="Booking Code"
                            name="bookingCode"
                            rules={[
                                {
                                    required: true,
                                    message: 'Input booking code',
                                },
                            ]}
                            onChange={(e) => {
                                setBookingCode(e.target.value);
                            }}
                        >
                            <Input value={bookingCode} placeholder="Booking code when booking" />
                        </Form.Item>

                        <Form.Item
                            label="Phone number"
                            name="phoneNumber"
                            rules={[
                                {
                                    required: true,
                                    message: 'Input phone number',
                                },
                            ]}
                            onChange={(e) => {
                                setPhone(e.target.value);
                            }}
                        >
                            <Input value={phone} placeholder="Phone number when booking" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Input Email',
                                },
                            ]}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        >
                            <Input value={email} placeholder="Email when booking" />
                        </Form.Item>

                        <div className="flex items-center justify-center flex-wrap gap-4">
                            <Button type="primary" size="large" onClick={getTicket}>
                                Search
                            </Button>
                            <Button type="default" size="large" onClick={reSendCode}>
                                Forgot your booking code?
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className="mt-6 w-full flex items-center justify-center">
                    {list &&
                        list.map((item) => {
                            let data = {
                                bookingDate: item.BookingDate.split('T')[0],
                                coach: item.Coach,
                                seat: item.Position,
                                train: item.TrainID,
                                fromStation: item.DepartStation,
                                toStation: item.ArriveStation,
                                depart: item.Depart,
                                arrival: item.Arrive,
                                cost: checkCost(item.Position),
                            };
                            return (
                                <div key={item.id} className="w-1/2">
                                    <CartItem data={data} nonEvent />
                                </div>
                            );
                        })}
                </div>
            </NonCartSiderLayout>
        </>
    );
};

export default BookingInfo;
