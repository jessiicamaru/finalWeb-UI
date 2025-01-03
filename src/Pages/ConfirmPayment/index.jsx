import NonCartSiderLayout from '@/Layouts/NonCartSiderLayout';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, notification } from 'antd';

import { InfoCircleFilled, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

import axios from '@/config/axios';
import CartItem from '@/Components/CartSider/CartItem';
import sendEmail from '@/utils/sendEmail';

const ConfirmPayment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [cusData, setCusData] = useState(null);
    const [successfully, setSuccessfully] = useState(false);
    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        location.state && setCusData(location.state.data);
    }, [location.state]);

    const handleCheckOrder = async (id) => {
        try {
            console.log(id);
            let response = await axios.post(import.meta.env.VITE_API_URL_V2 + '/zalopay/check-order-status', {
                app_trans_id: id,
            });

            console.log('[handleCheckOrder]', response.data);
            if (response.data.return_code == 1) {
                openNotification({
                    message: 'Order status',
                    description: 'Your order has been paid successfully',
                    icon: <CheckCircleOutlined style={{ color: '#0eba12' }} />,
                });
                setSuccessfully(true);
            } else if (response.data.return_code == 2) {
                openNotification({
                    message: 'Order status',
                    description: 'Your order payment failed',
                    icon: <CloseCircleOutlined style={{ color: '#ee1b24' }} />,
                });

                setTimeout(() => {
                    navigate('/search');
                }, 2000);
            } else if (response.data.return_code == 3) {
                openNotification({
                    message: 'Order status',
                    description: 'Your order is on processing',
                    icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
                });
            }
        } catch (err) {
            console.log(err);
        }
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

    const handleReturn = async () => {
        let response = await axios.post(import.meta.env.VITE_API_URL_V1 + '/clearCookie');

        let code = cusData.list
            .map((item) => {
                return item.id.slice(0, 10);
            })
            .join(';');

        sendEmail({
            name: cusData.name,
            email: cusData.email,
            code: code,
            templateCode: import.meta.env.VITE_EMAIL_TEMPLATE_ID_ANNOUCEMENT,
        });
        if (response.data.cookie_code == 1)
            setTimeout(() => {
                localStorage.setItem('Ads', false);
                navigate('/search');
            }, 1000);
    };

    return (
        cusData && (
            <NonCartSiderLayout>
                {contextHolder}
                <div className="w-full h-full flex justify-center flex-wrap p-6">
                    <div className="w-3/5 p-6 ">
                        <h1 className="w-full text-center text-2xl font-bold">Customer Information</h1>
                        <div className="my-6 w-full">
                            <div className="p-2 text-[16px]">
                                <strong>Full name: </strong>
                                {cusData.name}
                            </div>
                            <div className="p-2 text-[16px]">
                                <strong>Email: </strong>
                                {cusData.email}
                            </div>
                            <div className="p-2 text-[16px]">
                                <strong>Id: </strong>
                                {cusData.id}
                            </div>
                            <div className="p-2 text-[16px]">
                                <strong>Phone Number: </strong>
                                {cusData.phone}
                            </div>
                            <div className="text-center p-4">
                                <strong>List of order</strong>
                            </div>
                            <div className="p-2 text-[16px]">
                                {cusData &&
                                    cusData.list.map((item) => {
                                        return <CartItem key={item.id} data={item} nonEvent />;
                                    })}
                            </div>
                        </div>

                        <div className="my-6 w-full">
                            <Button
                                className="w-full text-[16px]"
                                type="primary"
                                style={{
                                    display: !successfully ? 'block' : 'none',
                                }}
                                size="large"
                                onClick={() => {
                                    handleCheckOrder(cusData.trans_id);
                                }}
                            >
                                Check your order status
                            </Button>
                        </div>

                        <div className="my-6 w-full">
                            <Button
                                className="w-full text-[16px]"
                                type="primary"
                                style={{
                                    display: successfully ? 'block' : 'none',
                                }}
                                size="large"
                                onClick={handleReturn}
                            >
                                Return home page
                            </Button>
                        </div>
                    </div>
                </div>
            </NonCartSiderLayout>
        )
    );
};

export default ConfirmPayment;
