import { Divider, List, Space } from 'antd';
import CartItem from './CartItem';

const CartSider = () => {
    const datalist = [
        // eslint-disable-next-line react/jsx-key
        <CartItem />,
        'Racing car sprays burning fuel into crowd.',
    ];

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
                }}
            >
                <Divider orientation="left">Depart</Divider>
                <List size="small" bordered dataSource={datalist} renderItem={(item) => <List.Item>{item}</List.Item>} />

                <Divider orientation="left">Return</Divider>
                <List size="small" bordered dataSource={datalist} renderItem={(item) => <List.Item>{item}</List.Item>} />
            </Space>
        </div>
    );
};

export default CartSider;
