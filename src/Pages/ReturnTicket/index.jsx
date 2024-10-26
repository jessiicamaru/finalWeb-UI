import { Form, Input, Button, Modal } from 'antd';
import NonCartSiderLayout from '@/Layouts/NonCartSiderLayout';
import { useState } from 'react';
import axios from '@/config/axios';
import { useNavigate } from 'react-router-dom';

const ReturnTicket = () => {
    const navigate = useNavigate();
    const [bookingCode, setBookingCode] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);

    const returnTicket = async () => {
        let response = await axios.post(import.meta.env.VITE_API_URL_V1 + '/returnTicket', {
            data: {
                bookingCode,
                phone,
                email,
            },
        });

        if (response.data.satus_code == 1) {
            console.log(response.data.message);
        } else {
            console.log(response.data.message);
        }
    };
    const reDirectPage = () => {
        navigate('/forgot-booking-code');
    };

    return (
        <>
            <NonCartSiderLayout>
                <div className="bg-white px-[50px] mt-6">
                    <h2 className="text-2xl font-bold">Return ticket</h2>
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
                        className="min-w-[80%] md:w-full"
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
                            <Button
                                type="primary"
                                size="large"
                                onClick={() => {
                                    Modal.confirm({
                                        onOk: () => {
                                            returnTicket();
                                        },
                                        title: 'Return ticket and refund',
                                        content: 'This action cannot be undone, and 10% will be charged for each canceled ticket.',
                                        footer: (_, { OkBtn, CancelBtn }) => (
                                            <>
                                                <CancelBtn />
                                                <OkBtn />
                                            </>
                                        ),
                                    });
                                }}
                            >
                                Return ticket
                            </Button>
                            <Button type="default" size="large" onClick={reDirectPage}>
                                Forgot your booking code?
                            </Button>
                        </div>
                    </Form>
                </div>
            </NonCartSiderLayout>
        </>
    );
};

export default ReturnTicket;
