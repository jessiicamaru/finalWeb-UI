import { Button, Divider, List, Space, notification } from 'antd';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { getListTicket, getWholeState } from '@/redux/selectors';
import { formatCurrency } from '@/utils/formatCurrency';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { InfoCircleFilled } from '@ant-design/icons';
import clsx from 'clsx';

const CartSider = () => {
    const { departureList, returnList } = useSelector(getListTicket);
    const { state } = useSelector(getWholeState);
    const [api, contextHolder] = notification.useNotification();
    const location = useLocation();
    const path = location.pathname;

    const [button, setButton] = useState(true);
    useEffect(() => {
        if (path == '/search/booking') setButton(false);
    }, [path, location]);

    const navigate = useNavigate();
    const handlePay = () => {
        if (totalCost > 0) {
            navigate('/search/booking/payment', { state });
        } else {
            openNotification({ message: 'Empty cart', description: 'Please choose your ticket' });
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

    const totalCost = useMemo(() => {
        const calculateTotalCost = (list) => {
            return list.reduce((total, item) => total + item.cost, 0);
        };

        return calculateTotalCost(departureList) + calculateTotalCost(returnList);
    }, [departureList, returnList]);

    useEffect(() => {
        if (path.includes('payment') && totalCost == 0) {
            navigate('/search');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalCost]);

    return (
        <>
            {contextHolder}
            <div className="h-full border-[1px] border-solid border-s-[#0505050f]">
                <Space
                    direction="vertical"
                    style={{
                        padding: '12px',
                        position: 'sticky',
                        right: '0',
                        top: '0',
                        width: '100%',
                        maxHeight: '100%',
                    }}
                >
                    <Divider orientation="left">Depart</Divider>
                    <List
                        size="small"
                        bordered
                        dataSource={departureList}
                        renderItem={(item) => (
                            <List.Item>
                                <CartItem data={item} index={0} />
                            </List.Item>
                        )}
                    />

                    <Divider orientation="left">Return</Divider>
                    <List
                        size="small"
                        bordered
                        dataSource={returnList}
                        renderItem={(item) => (
                            <List.Item>
                                <CartItem data={item} index={1} />
                            </List.Item>
                        )}
                    />
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            gap: '10px',
                            padding: '12px 0',
                            width: '100%',
                        }}
                    >
                        <div style={{ display: 'flex', color: 'black', justifyContent: 'space-between', width: '100%', fontSize: '16px' }}>
                            <div>
                                <b>Total:</b>
                            </div>
                            <div>{formatCurrency(totalCost)} VND</div>
                        </div>

                        <Button
                            className={clsx('w-full', {
                                '!hidden': button,
                                '!block': !button,
                            })}
                            type="primary"
                            onClick={() => handlePay()}
                        >
                            Pay
                        </Button>
                    </div>
                </Space>
            </div>
        </>
    );
};

export default CartSider;
