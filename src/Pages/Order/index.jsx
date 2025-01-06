import { AuthContext } from '@/context/AuthProvider';
import { Alert, Avatar, Button, Col, Form, Input, notification, Row, Select, Space, Typography } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { EditOutlined, EyeInvisibleOutlined, EyeOutlined, EyeTwoTone, InfoCircleFilled, SearchOutlined } from '@ant-design/icons';
import axios from '@/config/axios';
import clsx from 'clsx';
import validateForm from '@/utils/validateForm';
import { EmailAuthProvider, linkWithCredential, updatePassword } from 'firebase/auth';
import UserLayout from '@/Layouts/UserLayout';

const Order = () => {
    const { user } = useContext(AuthContext);
    const [u, setU] = useState({});
    const [api, contextHolder] = notification.useNotification();

    const [option, setOption] = useState('all');

    useEffect(() => {
        console.log(user);
        setU(user);
    }, [user]);

    const handleChange = (value) => {
        setOption(value);
    };

    return (
        <>
            {contextHolder}
            <UserLayout>
                <Typography.Title level={2} className="text-center w-full !font-bold !mb-12">
                    Orders
                </Typography.Title>
                <Row className="w-full">
                    <Row className="w-full p-4" justify={'space-between'}>
                        <Col span={8}>
                            <Select
                                defaultValue="all"
                                onChange={handleChange}
                                className="w-full"
                                options={[
                                    {
                                        value: 'all',
                                        label: 'All',
                                    },
                                    {
                                        value: 'expired',
                                        label: 'Expired',
                                    },
                                    {
                                        value: 'incoming',
                                        label: 'Incoming',
                                    },
                                ]}
                            />
                        </Col>
                        <Col span={10}>
                            <Row wrap={false} justify={'space-between'}>
                                <Col span={16}>
                                    <Input placeholder="Search" className="w-full" prefix={<SearchOutlined />} />
                                </Col>
                                <Col span={7}>
                                    <Button type="primary" className="w-full">
                                        Search
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="w-full p-4">
                        <Row className="w-full border-[1px] rounded-xl">
                            <Typography.Title level={2} className="text-center w-full !font-bold !mb-12">
                                Orders
                            </Typography.Title>
                            <Typography.Title level={2} className="text-center w-full !font-bold !mb-12">
                                Orders
                            </Typography.Title>
                            <Typography.Title level={2} className="text-center w-full !font-bold !mb-12">
                                Orders
                            </Typography.Title>
                            <Typography.Title level={2} className="text-center w-full !font-bold !mb-12">
                                Orders
                            </Typography.Title>
                        </Row>
                    </Row>
                </Row>
            </UserLayout>
        </>
    );
};

export default Order;
