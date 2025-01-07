import { AuthContext } from '@/context/AuthProvider';
import NonCartSiderLayout from '@/Layouts/NonCartSiderLayout';
import { Col, Input, Modal, notification, Row } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { InfoCircleFilled } from '@ant-design/icons';
import clsx from 'clsx';
import Loading from '@/Components/Loading';
import UserSideBar from '@/Components/UserSideBar';

// eslint-disable-next-line react/prop-types
const UserLayout = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [u, setU] = useState({});
    const [loading, setLoading] = useState(true);
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

    useEffect(() => {
        const TId = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(TId);
    });

    const handleOk = () => {
        if (!u.Password) {
            setIsModalOpen(false);
            setPass(true);
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
        if (user.db.UID) setU(user.db);
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
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleOk();
                        }
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
                        <Col
                            span={20}
                            className={clsx('p-8', {
                                'blur-xl': !pass,
                            })}
                        >
                            {children}
                        </Col>
                    </Row>
                </Row>
            </NonCartSiderLayout>
        </>
    );
};

export default UserLayout;
