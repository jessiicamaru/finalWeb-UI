import { Form, Input, Button, Modal, notification } from 'antd';
import NonCartSiderLayout from '@/Layouts/NonCartSiderLayout';
import { useState } from 'react';
import axios from '@/config/axios';
import CartItem from '@/Components/CartSider/CartItem';
import { checkCost } from '@/utils/checkCost';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { CloseCircleOutlined, InfoCircleFilled } from '@ant-design/icons';
import validateForm from '@/utils/validateForm';

const ReturnTicket = () => {
    const navigate = useNavigate();
    const [bookingCode, setBookingCode] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [list, setList] = useState(null);
    const [hidden, setHidden] = useState(false);
    const [modal, setModal] = useState(false);
    const [api, contextHolder] = notification.useNotification();

    const getTicket = async () => {
        const dataToValidate = {
            'Booking Code': {
                data: bookingCode,
                rules: [validateForm.isRequired, validateForm.includeSpecChar],
                icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
            },
            Phone: {
                data: phone,
                rules: [validateForm.isRequired, validateForm.includeSpecChar, validateForm.includeAlphabetChar],
                icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
            },
            Email: {
                data: email,
                rules: [validateForm.isRequired, validateForm.isEmail],
                icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
            },
        };

        const flag = validateForm(dataToValidate, openNotification);

        if (flag) {
            let response = await axios.post(import.meta.env.VITE_API_URL_V1 + '/getTicket', {
                data: {
                    bookingCode,
                    phone,
                    email,
                },
            });

            if (response.data.list.length > 0) {
                setHidden(true);
                setList(response.data.list);
            } else {
                openNotification({
                    message: 'No ticket found',
                    description: 'Check your provided information',
                    icon: <CloseCircleOutlined style={{ color: '#ee1b24' }} />,
                });
            }
        }
    };

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

    const openNotification = ({ message, description, icon }) => {
        api.info({
            message,
            description,
            placement: 'topRight',
            duration: 3,
            icon,
        });
    };

    return (
        <NonCartSiderLayout>
            {contextHolder}
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
                            onClick={getTicket}
                            className={clsx({
                                ['hidden']: hidden,
                                ['block']: !hidden,
                            })}
                        >
                            Find ticket
                        </Button>

                        <Button
                            type="primary"
                            size="large"
                            onClick={() => {
                                setModal(true);
                            }}
                            className={clsx({
                                ['hidden']: !hidden,
                                ['block']: hidden,
                            })}
                        >
                            Return ticket
                        </Button>

                        <Modal
                            open={modal}
                            centered
                            width={450}
                            title={'Return ticket and refund'}
                            onOk={() => {
                                setModal(false);
                                returnTicket();
                            }}
                            onCancel={() => {
                                setModal(false);
                            }}
                        >
                            <p>This action cannot be undone, and 10% will be charged for each canceled ticket.</p>
                        </Modal>
                        <Button type="default" size="large" onClick={reDirectPage}>
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
    );
};

export default ReturnTicket;
