import style from './style.module.css';
import { Form, Input, Button } from 'antd';
import NonCartSiderLayout from '@/Layouts/NonCartSiderLayout';
import { useState } from 'react';

const BookingInfo = () => {
    const [bookingCode, setBookingCode] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);

    const onSubmit = () => {};

    return (
        <>
            <NonCartSiderLayout>
                <div
                    style={{
                        padding: '0 50px',
                        marginTop: '24px',
                    }}
                    className="white-background"
                >
                    <h2>Enter your booking code, email and phone number to track your booking status</h2>
                    <h3
                        style={{
                            marginTop: '24px',
                        }}
                    >
                        To look up the reservation, please enter 3 following items exactly :
                    </h3>
                </div>

                <div className={style.formContainer}>
                    <Form
                        labelCol={{
                            span: 6,
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

                        <div className={style.buttonContainer}>
                            <Button type="primary" size="large" onClick={onSubmit}>
                                Search
                            </Button>
                            <Button type="default" size="large" onClick={onSubmit}>
                                Forgot your booking code?
                            </Button>
                        </div>
                    </Form>
                </div>
            </NonCartSiderLayout>
        </>
    );
};

export default BookingInfo;
