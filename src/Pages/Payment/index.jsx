import style from './style.module.css';

import NonCartButtonLayout from '@/Layouts/NonCartButtonLayout';
import { useEffect, useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Form, Input, notification } from 'antd';

import validateForm from './validateForm';
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

            let response = await axios.post('http://localhost:4000/api/v2/zalopay/payment', {
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
            <NonCartButtonLayout>
                <div
                    className="white-background"
                    style={{
                        width: '100%',
                        padding: '24px',
                    }}
                >
                    <div>
                        <h1
                            style={{
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            Choose payment method
                        </h1>

                        <div className={style.formContainer}>
                            <Form
                                labelCol={{
                                    span: 5,
                                }}
                                wrapperCol={{
                                    span: 12,
                                }}
                                layout="horizontal"
                                style={{
                                    minWidth: '80%',
                                }}
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

                        <div className={style.buttonContainer}>
                            <Button className={style.button} onClick={onSubmit}>
                                <div>
                                    <div className={style.imgContainer}>
                                        <img src="/payment/zalopay.png" alt="" />
                                    </div>
                                    <div className={style.content}>
                                        <div>
                                            <strong>Open ZaloPay</strong>
                                        </div>
                                        <div>
                                            <span>Scan QR code to pay</span>
                                        </div>
                                    </div>
                                    <CaretRightOutlined />
                                </div>
                            </Button>

                            <Button className={style.button} disabled>
                                <div>
                                    <div className={style.imgContainer}>
                                        <img src="/payment/momo.png" alt="" />
                                    </div>
                                    <div className={style.content}>
                                        <div>
                                            <strong>Open Momo</strong>
                                        </div>
                                        <div>
                                            <span>Scan QR code to pay</span>
                                        </div>
                                    </div>
                                    <CaretRightOutlined />
                                </div>
                            </Button>

                            <Button className={style.button} disabled>
                                <div>
                                    <div className={style.imgContainer}>
                                        <img src="/payment/vnpay.png" alt="" />
                                    </div>
                                    <div className={style.content}>
                                        <div>
                                            <strong>Open VNPAY</strong>
                                        </div>
                                        <div>
                                            <span>Scan QR code to pay</span>
                                        </div>
                                    </div>
                                    <CaretRightOutlined />
                                </div>
                            </Button>

                            <Button className={style.button} disabled>
                                <div>
                                    <div className={style.imgContainer}>
                                        <img src="/payment/visa.png" alt="" />
                                    </div>
                                    <div className={style.content}>
                                        <div>
                                            <strong>Pay with Visa or Master card</strong>
                                        </div>
                                    </div>
                                    <CaretRightOutlined />
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </NonCartButtonLayout>
        </>
    );
};

export default Payment;
