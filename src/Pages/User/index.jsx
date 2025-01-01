import { AuthContext } from '@/context/AuthProvider';
import NonCartSiderLayout from '@/Layouts/NonCartSiderLayout';
import { Alert, Avatar, Button, Col, Form, Input, notification, Row, Space, Typography } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { EditOutlined, EyeInvisibleOutlined, EyeOutlined, EyeTwoTone, InfoCircleFilled } from '@ant-design/icons';
import axios from '@/config/axios';
import clsx from 'clsx';
import Loading from '@/Components/Loading';
import SideBar from './SideBar';
import validateForm from '@/utils/validateForm';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const User = () => {
    const { user, setUser } = useContext(AuthContext);
    const [u, setU] = useState({});
    const [loading, setLoading] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const auth = getAuth();

    const [password, setPassword] = useState({
        current: '',
        new: '',
        confirm: '',
    });

    const [isEdit, setIsEdit] = useState({
        password: false,
    });

    const handleEdit = (field) => {
        setIsEdit({
            ...isEdit,
            [field]: !isEdit[field],
        });
    };

    const handleOnchange = (field, value) => {
        setPassword({
            ...password,
            [field]: value,
        });
    };

    useEffect(() => {
        setLoading(true);
        console.log(user);
        const fn = async () => {
            const res = await axios.get(import.meta.env.VITE_API_URL_V3 + '/get-user/?uid=' + user.uid);
            console.log(res.data);
            if (res.data) setU(res.data.data);

            setLoading(false);
        };

        if (user.uid) fn();
    }, [user]);

    const openNotification = ({ message, description, icon }) => {
        api.info({
            message,
            description,
            placement: 'top',
            duration: 3,
            icon,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToValidate = {
            'Current password': {
                data: {
                    data: password.current,
                    haveToCompare: u.Password,
                },
                rules: [validateForm.isRequired, validateForm.isCurrentPassword],
                icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
            },
            'New password': {
                data: {
                    data: password.new,
                    haveToCompare: u.Password,
                },
                rules: [validateForm.isRequired, validateForm.isNewPassword],
                icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
            },
            'Confirm password': {
                data: {
                    data: password.confirm,
                    haveToCompare: password.new,
                },
                rules: [validateForm.isRequired, validateForm.isConfirmPassword],
                icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
            },
        };

        const flag = validateForm(dataToValidate, openNotification);

        if (flag) {
            console.log({ u, user });
            await axios.post(import.meta.env.VITE_API_URL_V3 + '/update-user', {
                uid: u.UID,
                password: password.new,
            });

            const { user } = await createUserWithEmailAndPassword(auth, u.Email, password.new);
            setUser(user);

            navigate('/user/info');
        }
    };

    return loading ? (
        <Loading />
    ) : (
        <>
            {contextHolder}
            <NonCartSiderLayout>
                <Row className="h-full w-full bg-white px-[50px] mt-6" justify="center" align="center" wrap={true}>
                    <Row className="w-[90%] min-w-[calc(100% - 36px)]">
                        <Col span={4}>
                            <SideBar />
                        </Col>
                        <Col span={20} className="p-8">
                            <Typography.Title level={2} className="text-center w-full !font-bold !mb-12">
                                Personal Information
                            </Typography.Title>
                            <Row>
                                <Col span={18} className="border-r-2">
                                    <Row align="center" className="mb-6">
                                        <Col span={24}>
                                            <Typography.Text className="block !w-full !font-bold text-[16px]">Name</Typography.Text>
                                            <Typography.Text className="block !w-full">{u.DisplayName}</Typography.Text>
                                        </Col>
                                    </Row>

                                    <Row align="center" className="mb-6">
                                        <Col span={24}>
                                            <Typography.Text className="block !w-full !font-bold text-[16px]">Email</Typography.Text>
                                            <Typography.Text className="block !w-full">{u.Email}</Typography.Text>
                                        </Col>
                                    </Row>

                                    <Row align="center" className="mb-6">
                                        <Col span={16}>
                                            <Typography.Text className="block !w-full !font-bold text-[16px]">Password</Typography.Text>
                                            <Typography.Text className="block !w-full">
                                                {!u.Password ? (
                                                    <p className="text-gray-500">You didn&apos;t set up password</p>
                                                ) : showPassword ? (
                                                    u.Password
                                                ) : (
                                                    '********'
                                                )}
                                            </Typography.Text>

                                            <Form
                                                labelCol={{
                                                    span: 10,
                                                }}
                                                wrapperCol={{
                                                    span: 14,
                                                }}
                                                className={clsx('w-full mt-4', {
                                                    '!hidden': !isEdit.password,
                                                    block: isEdit.password,
                                                })}
                                            >
                                                <Form.Item
                                                    label="Current password"
                                                    rules={[
                                                        {
                                                            required: false,
                                                        },
                                                    ]}
                                                >
                                                    <Input.Password
                                                        placeholder="At least 6 characters"
                                                        onChange={(e) => {
                                                            handleOnchange('current', e.target.value);
                                                        }}
                                                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                                    />
                                                    <Alert
                                                        message="Leave blank if you don't have a password"
                                                        type="warning"
                                                        showIcon
                                                        className="mt-4"
                                                    />
                                                </Form.Item>

                                                <Form.Item
                                                    label="New password"
                                                    name="new"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your password!',
                                                        },
                                                    ]}
                                                >
                                                    <Input.Password
                                                        placeholder="At least 6 characters"
                                                        onChange={(e) => {
                                                            handleOnchange('new', e.target.value);
                                                        }}
                                                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                                    />
                                                </Form.Item>

                                                <Form.Item
                                                    label="Confirm password"
                                                    name="confirm"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your password!',
                                                        },
                                                    ]}
                                                >
                                                    <Input.Password
                                                        placeholder="At least 6 characters"
                                                        onChange={(e) => {
                                                            handleOnchange('confirm', e.target.value);
                                                        }}
                                                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                                    />
                                                </Form.Item>

                                                <Form.Item className="flex justify-center">
                                                    <Button type="primary" size="large" className="w-24" onClick={handleSubmit}>
                                                        Save
                                                    </Button>
                                                </Form.Item>
                                            </Form>
                                        </Col>
                                        <Col span={8} className="flex items-center justify-end pr-3">
                                            <Button
                                                icon={<EyeOutlined />}
                                                ghost
                                                className={clsx('!text-black', {
                                                    '!hidden': !u.Password,
                                                    block: u.Password,
                                                })}
                                                onClick={() => {
                                                    setShowPassword(!showPassword);
                                                }}
                                            >
                                                Show
                                            </Button>
                                            <Button
                                                icon={<EditOutlined />}
                                                ghost
                                                className="!text-black"
                                                onClick={() => {
                                                    handleEdit('password');
                                                }}
                                            >
                                                Edit
                                            </Button>
                                        </Col>
                                    </Row>

                                    <Alert
                                        className={clsx('mr-6', {
                                            '!hidden': u.Password,
                                            flex: !u.Password,
                                        })}
                                        message="Password Tip"
                                        description="Set up password for logging in your account"
                                        type="info"
                                        showIcon
                                    />
                                </Col>
                                <Col span={6}>
                                    <Space className="w-full flex justify-center">
                                        <Avatar className="w-[80px] h-[80px]" src={u.PhotoURL}>
                                            {u.PhotoURL ? '' : u.DisplayName?.charAt(0).toUpperCase()}
                                        </Avatar>
                                    </Space>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </NonCartSiderLayout>
        </>
    );
};

export default User;
