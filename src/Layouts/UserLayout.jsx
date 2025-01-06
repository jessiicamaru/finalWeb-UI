import { AuthContext } from '@/context/AuthProvider';
import NonCartSiderLayout from '@/Layouts/NonCartSiderLayout';
import { Col, Input, Modal, notification, Row } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { InfoCircleFilled } from '@ant-design/icons';
import axios from '@/config/axios';
import clsx from 'clsx';
import Loading from '@/Components/Loading';
import UserSideBar from '@/Components/UserSideBar';

// eslint-disable-next-line react/prop-types
const UserLayout = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [u, setU] = useState({});
    const [loading, setLoading] = useState(false);
    const [api, contextHolder] = notification.useNotification();

    const [isModalOpen, setIsModalOpen] = useState(true);
    const [pass, setPass] = useState(false);

    const [data, setData] = useState({
        current: '',
        new: '',
        confirm: '',
        id: '',
        phone: '',
        passwordModal: '',
    });

    const handleOk = () => {
        if (!u.Password) {
            setIsModalOpen(false);
            return;
        }
        if (data.passwordModal == u.Password) {
            setIsModalOpen(false);
            setPass(true);
        } else {
            openNotification({ message: 'Password', description: 'Password is incorrect', icon: <InfoCircleFilled style={{ color: '#f9bf02' }} /> });
        }
    };

    const handleOnchange = (field, value) => {
        setData({
            ...data,
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

    return loading ? (
        <Loading />
    ) : (
        <>
            {contextHolder}
            <Modal title="Input password" open={isModalOpen} onOk={handleOk} cancelButtonProps={{ style: { display: 'none' } }} closable={false}>
                <Input.Password
                    placeholder="At least 6 characters"
                    onChange={(e) => {
                        handleOnchange('passwordModal', e.target.value);
                    }}
                />
            </Modal>
            <NonCartSiderLayout>
                <Row
                    className={clsx('h-full w-full bg-white px-[50px] mt-6', {
                        'pointer-events-none': !pass,
                    })}
                    justify="center"
                    align="center"
                    wrap={true}
                >
                    <Row className="w-[90%] min-w-[calc(100% - 36px)]">
                        <Col span={4}>
                            <UserSideBar />
                        </Col>
                        <Col span={20} className="p-8">
                            {children}
                        </Col>
                    </Row>
                </Row>
            </NonCartSiderLayout>
        </>
    );
};

export default UserLayout;
