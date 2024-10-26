import { Form, Input, Button } from 'antd';
import NonCartSiderLayout from '@/Layouts/NonCartSiderLayout';
import { useState } from 'react';
import axios from '@/config/axios';
import sendEmail from '@/utils/sendEmail';

const ForgotBookingCode = () => {
    const [email, setEmail] = useState(null);

    const getCode = async () => {
        let response = await axios.post(import.meta.env.VITE_API_URL_V1 + '/getCode', {
            data: {
                email,
            },
        });

        console.log(response.data.code);
        if (response.data.status_code == 1) {
            sendEmail({
                email: email,
                code: response.data.code,
                templateCode: import.meta.env.VITE_EMAIL_TEMPLATE_ID_RESEND_BOOKING_CODE,
            });
        }
    };
    return (
        <>
            <NonCartSiderLayout>
                <div className="bg-white px-[50px] mt-6">
                    <h2 className="text-2xl font-bold">Recover booking code</h2>
                    <h3 className="mt-6 text-xl font-bold">Enter exactly email when booking</h3>
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
                            <Button type="primary" size="large" onClick={getCode}>
                                Receive booking code
                            </Button>
                        </div>
                    </Form>
                </div>
            </NonCartSiderLayout>
        </>
    );
};

export default ForgotBookingCode;
