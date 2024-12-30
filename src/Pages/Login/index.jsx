import NonCartSiderLayout from '@/Layouts/NonCartSiderLayout';
import { Button, Form, Input, Row, Space, Typography } from 'antd';
import { UserOutlined, LockOutlined, FacebookOutlined, MailOutlined } from '@ant-design/icons';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { useContext } from 'react';
// import { AuthContext } from '@/context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from '@/config/axios';

const Login = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    const handleLoginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();

        const {
            user: { uid, displayName, photoURL, email },
        } = await signInWithPopup(auth, provider);

        const res = await axios.post(import.meta.env.VITE_API_URL_V3 + '/add-user', {
            uid,
            displayName,
            photoURL,
            email,
        });

        console.log(res);
        if (res.status === 200) navigate('/');
    };

    if (localStorage.getItem('access_token_rt')) {
        navigate('/');
    }

    return (
        <NonCartSiderLayout>
            <Row className="h-full w-full bg-white px-[50px] mt-6" justify={'center'} align={'center'} wrap={true}>
                <Typography.Title level={2} className="text-center w-full !font-bold">
                    Login
                </Typography.Title>

                <Space className="w-full flex justify-center">
                    <Form className="w-[500px]" layout="vertical">
                        <Form.Item label="User name" vertical className="!font-bold mb-4">
                            <Input
                                className="w-full font-thin"
                                size="large"
                                name="username"
                                placeholder="Type your user name"
                                type="text"
                                prefix={<UserOutlined />}
                            />
                        </Form.Item>

                        <Form.Item label="Password" vertical className="!font-bold" mb-4>
                            <Input
                                className="w-full font-thin"
                                size="large"
                                name="password"
                                placeholder="Type your password"
                                type="password"
                                prefix={<LockOutlined />}
                            />
                        </Form.Item>

                        <Typography.Link className="w-full block text-end">Forgot password?</Typography.Link>

                        <Button className="w-full mt-8 !py-4 !h-12 rounded-full" type="primary">
                            Login
                        </Button>
                    </Form>
                </Space>

                <Row className="!w-full my-4 font-bold" justify={'center'}>
                    Or login with
                </Row>
                <Space direction="vertical" className="-mt-7">
                    <Row className="w-full flex mt-6 justify-center gap-3">
                        <Button
                            shape="circle"
                            ghost
                            className="!p-3 h-14 w-14 hover:cursor-pointer hover:opacity-80 hover:!text-[white] hover:!bg-[#1677ff] transition-all rounded-[10px] !text-black"
                        >
                            <FacebookOutlined className="text-[25px]" />
                        </Button>
                        <Button
                            shape="circle"
                            ghost
                            className="!p-3 h-14 w-14 hover:cursor-pointer hover:opacity-80 hover:!text-[white] hover:!bg-[#1677ff] transition-all rounded-[10px] !text-black"
                            onClick={handleLoginWithGoogle}
                        >
                            <MailOutlined className="text-[25px]" />
                        </Button>
                    </Row>
                </Space>
            </Row>
        </NonCartSiderLayout>
    );
};

export default Login;
