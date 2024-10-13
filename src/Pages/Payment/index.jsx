import style from './style.module.css';

import NonCartButtonLayout from '@/Layouts/NonCartButtonLayout';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'antd';

import { CaretRightOutlined } from '@ant-design/icons';

const Payment = () => {
    const location = useLocation();

    useEffect(() => {
        location.state && console.log(location.state);
    }, [location.state]);

    return (
        <NonCartButtonLayout>
            <div
                className="white-background"
                style={{
                    width: '100%',
                    height: '100%',
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

                    <div className={style.buttonContainer}>
                        <Button className={style.button}>
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
    );
};

export default Payment;
