import { AuthContext } from '@/context/AuthProvider';
import { Alert, Avatar, Button, Col, Form, Input, notification, Row, Space, Typography } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { EditOutlined, EyeInvisibleOutlined, EyeOutlined, EyeTwoTone, InfoCircleFilled } from '@ant-design/icons';
import axios from '@/config/axios';
import clsx from 'clsx';
import validateForm from '@/utils/validateForm';
import { EmailAuthProvider, linkWithCredential, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import UserLayout from '@/Layouts/UserLayout';

const User = () => {
    const { user, auth } = useContext(AuthContext);
    const [u, setU] = useState({});

    useEffect(() => {
        if (Object.keys(user.firebase).length && Object.keys(user.db).length) {
            console.log(user);
            setU(user);
        }
    }, [user]);
    const [api, contextHolder] = notification.useNotification();
    const [showPassword, setShowPassword] = useState(false);
    const [showID, setShowID] = useState(false);
    const [showPhone, setShowPhone] = useState(false);

    const [data, setData] = useState({
        current: '',
        new: '',
        confirm: '',
        id: '',
        phone: '',
        passwordModal: '',
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
        setData({
            ...data,
            [field]: value,
        });
    };

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
                    data: data.current,
                    haveToCompare: u.db.Password,
                },
                rules: [validateForm.isRequired, validateForm.isCurrentPassword],
                icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
            },
            'New password': {
                data: {
                    data: data.new,
                    haveToCompare: u.db.Password,
                },
                rules: [validateForm.isRequired, validateForm.isNewPassword],
                icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
            },
            'Confirm password': {
                data: {
                    data: data.confirm,
                    haveToCompare: data.new,
                },
                rules: [validateForm.isRequired, validateForm.isConfirmPassword],
                icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
            },
        };

        const flag = validateForm(dataToValidate, openNotification);

        console.log(u);

        if (flag) {
            console.log(u.db);
            const credential = EmailAuthProvider.credential(u.db.Email, data.current);

            if (!u.db.Password && data.new) {
                try {
                    const credential = EmailAuthProvider.credential(u.db.Email, data.new);

                    const rs = await linkWithCredential(user.firebase, credential);
                    console.log('[email, pass] linked:', rs.user);

                    await updatePassword(user.firebase, data.new);
                    console.log('Password updated successfully');

                    await axios.post(import.meta.env.VITE_API_URL_V3 + '/update-user', {
                        uid: u.db.UID,
                        password: data.new,
                    });

                    // Reload the page after everything is done
                    window.location.reload();
                } catch (error) {
                    console.error('Error linking email & password:', error);
                }
            }

            console.log(auth.currentUser, credential, data.new);
            try {
                await reauthenticateWithCredential(auth.currentUser, credential);
                await updatePassword(auth.currentUser, data.new);
            } catch (err) {
                console.log(err);
            }

            await axios.post(import.meta.env.VITE_API_URL_V3 + '/update-user', {
                uid: u.db.UID,
                password: data.new,
            });

            // Reload the page after everything is done
            window.location.reload();
        }
    };

    const handleSubmitSubForm = async (e) => {
        e.preventDefault();

        const dataToValidate = {
            'ID Number': {
                data: data.id,
                rules: [validateForm.isRequired, validateForm.includeSpecChar, validateForm.includeAlphabetChar],
                icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
            },
            Phone: {
                data: data.phone,
                rules: [validateForm.isRequired, validateForm.includeAlphabetChar, validateForm.includeSpecChar],
                icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
            },
        };

        const flag = validateForm(dataToValidate, openNotification);

        if (flag) {
            await axios.post(import.meta.env.VITE_API_URL_V3 + '/update-user', {
                uid: u.db.UID,
                idNumber: data.id,
                phone: data.phone,
            });

            window.location.reload();
        }
    };

    return (
        Object.keys(u).length && (
            <>
                {contextHolder}
                <UserLayout>
                    <Typography.Title level={2} className="text-center w-full !font-bold !mb-12">
                        Personal Information
                    </Typography.Title>
                    <Row>
                        <Col span={20} className="border-r-2 pr-8">
                            <Row align="center" className="mb-6">
                                <Col span={24}>
                                    <Typography.Text className="block !w-full !font-bold text-[16px]">Name</Typography.Text>
                                    <Typography.Text className="block !w-full">{u.db.DisplayName}</Typography.Text>
                                </Col>
                            </Row>

                            <Row align="center" className="mb-6">
                                <Col span={24}>
                                    <Typography.Text className="block !w-full !font-bold text-[16px]">Email</Typography.Text>
                                    <Typography.Text className="block !w-full">{u.db.Email}</Typography.Text>
                                </Col>
                            </Row>

                            <Row align="center" className="mb-6">
                                <Col span={16}>
                                    <Typography.Text className="block !w-full !font-bold text-[16px]">Password</Typography.Text>
                                    <Typography.Text className="block !w-full">
                                        {!u.db.Password ? (
                                            <p className="text-gray-500">You didn&apos;t set up password</p>
                                        ) : showPassword ? (
                                            u.db.Password
                                        ) : (
                                            '********'
                                        )}
                                    </Typography.Text>

                                    <Form
                                        className={clsx('w-full mt-4', {
                                            '!hidden': !isEdit.password,
                                            block: isEdit.password,
                                        })}
                                        layout="vertical"
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
                                            <Alert message="Leave blank if you don't have a password" type="warning" showIcon className="mt-4" />
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
                                <Col span={8} className="flex items-center justify-end gap-2 ">
                                    <Button
                                        icon={<EditOutlined />}
                                        ghost
                                        className="!text-black"
                                        onClick={() => {
                                            handleEdit('password');
                                        }}
                                        classNames="w-[50px]"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        icon={<EyeOutlined />}
                                        ghost
                                        className={clsx('!text-black w-[80px]', {
                                            '!hidden': !u.db.Password || showPassword,
                                            flex: u.db.Password,
                                        })}
                                        onClick={() => {
                                            setShowPassword(!showPassword);
                                        }}
                                    >
                                        Show
                                    </Button>

                                    <Button
                                        icon={<EyeInvisibleOutlined />}
                                        ghost
                                        className={clsx('!text-black w-[80px]', {
                                            '!hidden': !showPassword,
                                            flex: showPassword,
                                        })}
                                        onClick={() => {
                                            setShowPassword(!showPassword);
                                        }}
                                    >
                                        Hide
                                    </Button>
                                </Col>
                            </Row>

                            <Alert
                                className={clsx('mr-6', {
                                    '!hidden': u.db.Password,
                                    flex: !u.db.Password,
                                })}
                                message="Password Tip"
                                description="Set up password for logging in your account"
                                type="info"
                                showIcon
                            />

                            <Row align="center" className="mb-6">
                                <Col span={16}>
                                    <Typography.Text className="block !w-full !font-bold text-[16px]">ID Number</Typography.Text>
                                    <Typography.Text className="block !w-full">{showID ? u.db.IDNumber : '*********'}</Typography.Text>
                                </Col>

                                <Col span={8} className="flex items-center justify-end gap-2 ">
                                    <Button
                                        icon={<EditOutlined />}
                                        ghost
                                        className="!text-black"
                                        onClick={() => {
                                            handleEdit('password');
                                        }}
                                        classNames="w-[50px]"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        icon={<EyeOutlined />}
                                        ghost
                                        className={clsx('!text-black w-[80px]', {
                                            '!hidden': !u.db.Password || showID,
                                            flex: u.db.Password,
                                        })}
                                        onClick={() => {
                                            setShowID(!showID);
                                        }}
                                    >
                                        Show
                                    </Button>

                                    <Button
                                        icon={<EyeInvisibleOutlined />}
                                        ghost
                                        className={clsx('!text-black w-[80px]', {
                                            '!hidden': !showID,
                                            flex: showID,
                                        })}
                                        onClick={() => {
                                            setShowID(!showID);
                                        }}
                                    >
                                        Hide
                                    </Button>
                                </Col>
                            </Row>

                            <Row align="center" className="mb-6">
                                <Col span={16}>
                                    <Typography.Text className="block !w-full !font-bold text-[16px]">Phone</Typography.Text>
                                    <Typography.Text className="block !w-full">{showPhone ? u.db.PhoneNumber : '********'}</Typography.Text>
                                </Col>

                                <Col span={8} className="flex items-center justify-end gap-2 ">
                                    <Button
                                        icon={<EditOutlined />}
                                        ghost
                                        className="!text-black"
                                        onClick={() => {
                                            handleEdit('password');
                                        }}
                                        classNames="w-[50px]"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        icon={<EyeOutlined />}
                                        ghost
                                        className={clsx('!text-black w-[80px]', {
                                            '!hidden': !u.db.Password || showPhone,
                                            flex: u.db.Password,
                                        })}
                                        onClick={() => {
                                            setShowPhone(!showPhone);
                                        }}
                                    >
                                        Show
                                    </Button>

                                    <Button
                                        icon={<EyeInvisibleOutlined />}
                                        ghost
                                        className={clsx('!text-black w-[80px]', {
                                            '!hidden': !showPhone,
                                            flex: showPhone,
                                        })}
                                        onClick={() => {
                                            setShowPhone(!showPhone);
                                        }}
                                    >
                                        Hide
                                    </Button>
                                </Col>
                            </Row>

                            <Row
                                className={clsx('w-full p-6 border-[1px] rounded-2xl', {
                                    '!hidden': u.db.PhoneNumber && u.db.IDNumber,
                                    block: !u.db.PhoneNumber && !u.db.IDNumber,
                                })}
                            >
                                <Typography.Title level={2} className="font-bold w-full block text-center">
                                    Additional Information
                                </Typography.Title>

                                <Alert
                                    className="w-full mb-3"
                                    message="Additional Information"
                                    description="Set up more information for easy reservation!"
                                    type="info"
                                    showIcon
                                />
                                <Form className="w-full " layout="vertical">
                                    <Form.Item label="ID Number" name="id" rules={[{ required: true, message: 'Please input your ID!' }]} vertical>
                                        <Input
                                            className="w-full"
                                            placeholder="At least 6 characters"
                                            onChange={(e) => {
                                                handleOnchange('id', e.target.value);
                                            }}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        label="Phone Number"
                                        name="phone"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            className="w-full"
                                            placeholder="At least 6 characters"
                                            onChange={(e) => {
                                                handleOnchange('phone', e.target.value);
                                            }}
                                        />
                                    </Form.Item>

                                    <Form.Item className="flex justify-center">
                                        <Button type="primary" size="large" className="w-24" onClick={handleSubmitSubForm}>
                                            Save
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Row>
                        </Col>
                        <Col span={4}>
                            <Space className="w-full flex justify-center">
                                <Avatar className="w-[80px] h-[80px]" src={u.db.PhotoURL}>
                                    {u.db.PhotoURL ? '' : u.db.DisplayName?.charAt(0).toUpperCase()}
                                </Avatar>
                            </Space>
                        </Col>
                    </Row>
                </UserLayout>
            </>
        )
    );
};

export default User;
