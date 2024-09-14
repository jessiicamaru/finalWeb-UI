import { Divider, List, Space } from 'antd';

const CartSider = () => {
    const datalist = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
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
                    padding: '24px',
                    position: 'sticky',
                    right: '0',
                    top: '0',
                }}
            >
                <Divider orientation="left">Your cart</Divider>
                <List size="small" bordered dataSource={datalist} renderItem={(item) => <List.Item>{item}</List.Item>} />
            </Space>
        </div>
    );
};

export default CartSider;
