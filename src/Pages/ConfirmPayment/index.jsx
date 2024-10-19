import style from './style.module.css';

import NonCartSiderLayout from '@/Layouts/NonCartSiderLayout';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, notification } from 'antd';

import { InfoCircleFilled } from '@ant-design/icons';

import axios from '@/config/axios';
import CartItem from '@/Components/CartSider/CartItem';

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
            let response = await axios.post('http://localhost:4000/api/v2/zalopay/check-order-status', {
                app_trans_id: id,
            });

            console.log(response.data);
            if (response.data.return_code == 1) {
                openNotification({
                    message: 'Order status',
                    description: 'Your order has been paid successfully',
                });
                setSuccessfully(true);
            } else if (response.data.return_code == 2) {
                openNotification({
                    message: 'Order status',
                    description: 'Your order payment failed',
                });
            } else if (response.data.return_code == 3) {
                openNotification({
                    message: 'Order status',
                    description: 'Your order is on processing',
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    const openNotification = ({ message, description }) => {
        api.info({
            message,
            description,
            placement: 'topRight',
            duration: 3,
            icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
        });
    };

    const handleReturn = async () => {
        let response = await axios.post('http://localhost:4000/api/v1/clearCookie');
        if (response.data.cookie_code == 1) navigate('/search');
    };

    return (
        cusData && (
            <NonCartSiderLayout>
                {contextHolder}
                <div className={style.main}>
                    <div className={style.container}>
                        <h1>Customer Information</h1>
                        <div>
                            <div>
                                <strong>Full name: </strong>
                                {cusData.name}
                            </div>
                            <div>
                                <strong>Email: </strong>
                                {cusData.email}
                            </div>
                            <div>
                                <strong>Id: </strong>
                                {cusData.id}
                            </div>
                            <div>
                                <strong>Phone Number: </strong>
                                {cusData.phone}
                            </div>
                            <div
                                style={{
                                    textAlign: 'center',
                                }}
                            >
                                <strong>List of order</strong>
                            </div>
                            <div>
                                {cusData &&
                                    cusData.list.map((item) => {
                                        return <CartItem key={item.id} data={item} nonEvent />;
                                    })}
                            </div>
                        </div>

                        <div>
                            <Button
                                type="primary"
                                style={{
                                    width: '100%',
                                    fontSize: '16px',
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

                        <div>
                            <Button
                                type="primary"
                                style={{
                                    width: '100%',
                                    fontSize: '16px',
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
