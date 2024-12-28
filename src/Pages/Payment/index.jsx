import DefaultLayout from '@/Layouts/DefaultLayout';
import { useEffect, useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Form, Input, notification } from 'antd';

import validateForm from '@/utils/validateForm';
import { CaretRightOutlined, InfoCircleFilled } from '@ant-design/icons';

import { getListTicket } from '@/redux/selectors';
import { useSelector } from 'react-redux';
import axios from '@/config/axios';
import { transactionIdGenerator } from './transactionIdGenerate';

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [name, setName] = useState(null);
    const [id, setId] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [api, contextHolder] = notification.useNotification();

    const { departureList, returnList } = useSelector(getListTicket);

    const totalCost = useMemo(() => {
        const calculateTotalCost = (list) => {
            return list.reduce((total, item) => total + item.cost, 0);
        };

        return calculateTotalCost(departureList) + calculateTotalCost(returnList);
    }, [departureList, returnList]);

    const handleNameChange = (value) => {
        setName(value.trim());
    };
    const handleIdChange = (value) => {
        setId(value.trim());
    };
    const handlePhoneChange = (value) => {
        setPhone(value.trim());
    };
    const handleEmailChange = (value) => {
        setEmail(value.trim());
    };

    const openNotification = ({ message, description }) => {
        api.info({
            message,
            description,
            placement: 'top',
            duration: 3,
            icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const dataToValidate = {
            Name: {
                data: name,
                rules: [validateForm.isRequired, validateForm.includeSpecChar, validateForm.includeNum],
            },
            Id: {
                data: id,
                rules: [validateForm.isRequired, validateForm.includeSpecChar, validateForm.includeAlphabetChar],
            },
            Phone: {
                data: phone,
                rules: [validateForm.isRequired, validateForm.includeSpecChar, validateForm.includeAlphabetChar],
            },
            Email: {
                data: email,
                rules: [validateForm.isRequired, validateForm.isEmail],
            },
        };

        const flag = validateForm(dataToValidate, openNotification);

        if (flag) {
            console.log({
                departure: departureList,
                return: returnList,
            });

            let trans_id = transactionIdGenerator(id, phone);

            let response = await axios.post(import.meta.env.VITE_API_URL_V2 + '/zalopay/payment', {
                data: {
                    name,
                    id,
                    phone,
                    email,
                    list: JSON.stringify([...departureList, ...returnList]),
                    amount: totalCost,
                    trans_id,
                },
            });

            console.log(response.data);
            window.open(response.data.order_url, '_blank');
            navigate('/search/booking/payment/confirm-payment', {
                state: {
                    data: {
                        trans_id,
                        amount: totalCost,
                        name,
                        phone,
                        id,
                        email,
                        list: [...departureList, ...returnList],
                    },
                },
            });
        }
    };

    useEffect(() => {
        location.state && console.log(location.state);
    }, [location.state]);

    return (
        <>
            {contextHolder}
            <DefaultLayout noButton={true}>
                <div className="bg-white w-full p-6">
                    <div>
                        <h1 className="text-2xl w-full text-center font-bold">Choose payment method</h1>

                        <div className="flex items-center justify-center mt-6">
                            <Form
                                labelCol={{
                                    span: 5,
                                }}
                                wrapperCol={{
                                    span: 12,
                                }}
                                layout="horizontal"
                                className="min-w-[80%]"
                            >
                                <Form.Item
                                    label="Name"
                                    name="Name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Input name',
                                        },
                                    ]}
                                >
                                    <Input
                                        value={name}
                                        placeholder="Full name"
                                        onChange={(e) => {
                                            handleNameChange(e.target.value);
                                        }}
                                    />
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
                                >
                                    <Input
                                        value={phone}
                                        placeholder="Phone number"
                                        onChange={(e) => {
                                            handlePhoneChange(e.target.value);
                                        }}
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="ID"
                                    name="id"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Input identification number',
                                        },
                                    ]}
                                >
                                    <Input
                                        value={id}
                                        placeholder="Identification number"
                                        onChange={(e) => {
                                            handleIdChange(e.target.value);
                                        }}
                                    />
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
                                >
                                    <Input
                                        value={email}
                                        placeholder="Email"
                                        onChange={(e) => {
                                            handleEmailChange(e.target.value);
                                        }}
                                    />
                                </Form.Item>
                            </Form>
                        </div>

                        <div className="flex items-center justify-center flex-wrap">
                            <Button className="w-4/5 mt-[30px] px-5 py-3 h-[90px]" onClick={onSubmit}>
                                <div className="w-full flex items-center gap-[10px]">
                                    <div className="w-[10%] flex items-center justify-center">
                                        <img className="w-100% object-contain" src="/payment/zalopay.png" alt="" />
                                    </div>
                                    <div className="flex flex-wrap w-4/5 h-full items-center justify-center">
                                        <div className="w-full flex justify-start">
                                            <strong className="text-[16px]">Open ZaloPay</strong>
                                        </div>
                                        <div className="w-full flex justify-start">
                                            <span>Scan QR code to pay</span>
                                        </div>
                                    </div>
                                    <CaretRightOutlined />
                                </div>
                            </Button>

                            <Button className="w-4/5 mt-[30px] px-5 py-3 h-[90px]" disabled>
                                <div className="w-full flex items-center gap-[10px]">
                                    <div className="w-[10%] flex items-center justify-center">
                                        <img className="w-100% object-contain" src="/payment/momo.png" alt="" />
                                    </div>
                                    <div className="flex flex-wrap w-4/5 h-full items-center justify-center">
                                        <div className="w-full flex justify-start">
                                            <strong className="text-[16px]">Open Momo</strong>
                                        </div>
                                        <div className="w-full flex justify-start">
                                            <span>Scan QR code to pay</span>
                                        </div>
                                    </div>
                                    <CaretRightOutlined />
                                </div>
                            </Button>

                            <Button className="w-4/5 mt-[30px] px-5 py-3 h-[90px]" disabled>
                                <div className="w-full flex items-center gap-[10px]">
                                    <div className="w-[10%] flex items-center justify-center">
                                        <img className="w-100% object-contain" src="/payment/vnpay.png" alt="" />
                                    </div>
                                    <div className="flex flex-wrap w-4/5 h-full items-center justify-center">
                                        <div className="w-full flex justify-start">
                                            <strong className="text-[16px]">Open VNPAY</strong>
                                        </div>
                                        <div className="w-full flex justify-start">
                                            <span>Scan QR code to pay</span>
                                        </div>
                                    </div>
                                    <CaretRightOutlined />
                                </div>
                            </Button>

                            <Button className="w-4/5 mt-[30px] px-5 py-3 h-[90px]" disabled>
                                <div className="w-full flex items-center gap-[10px]">
                                    <div className="w-[10%] flex items-center justify-center">
                                        <img className="w-100% object-contain" src="/payment/visa.png" alt="" />
                                    </div>
                                    <div className="flex flex-wrap w-4/5 h-full items-center justify-center">
                                        <div className="w-full flex justify-start">
                                            <strong className="text-[16px] ">Pay with Visa or Master card</strong>
                                        </div>
                                    </div>
                                    <CaretRightOutlined />
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
};

export default Payment;
