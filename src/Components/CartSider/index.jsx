import { Button, Divider, List, Space } from 'antd';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { getListTicket } from '@/redux/selectors';
import { formatCurrency } from '@/utils/formatCurrency';
import { useMemo } from 'react';

const CartSider = () => {
    const { departureList, returnList } = useSelector(getListTicket);

    const totalCost = useMemo(() => {
        const calculateTotalCost = (list) => {
            return list.reduce((total, item) => total + item.cost, 0);
        };

        return calculateTotalCost(departureList) + calculateTotalCost(returnList);
    }, [departureList, returnList]);

    return (
        <div
            style={{
                borderInlineStart: '1px solid rgba(5, 5, 5, 0.06)',
                height: '100%',
            }}
        >
            <Space
                direction="vertical"
                style={{
                    padding: '12px',
                    position: 'sticky',
                    right: '0',
                    top: '0',
                    width: '100%',
                    height: '100%',
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
                        style={{
                            width: '100%',
                        }}
                        type="primary"
                    >
                        Pay
                    </Button>
                </div>
            </Space>
        </div>
    );
};

export default CartSider;
