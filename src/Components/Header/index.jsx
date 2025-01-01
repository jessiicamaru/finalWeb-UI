import { AuthContext } from '@/context/AuthProvider';
import { Avatar, Menu, notification } from 'antd';
import clsx from 'clsx';
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { InfoCircleFilled, LoginOutlined, LogoutOutlined } from '@ant-design/icons';

const Header = () => {
    const data = [
        {
            key: '3',
            href: '/booking-info',
            content: 'Booking Info',
        },
        {
            key: '4',
            href: '/return-ticket',
            content: 'Return Ticket',
        },
        {
            key: '5',
            href: '/term-condition',
            content: 'Terms & Conditions',
        },
        {
            key: '6',
            href: '/contact',
            content: 'Contact',
        },
        {
            key: '7',
            href: '/faqs',
            content: 'FAQs',
        },
    ];

    const location = useLocation();
    const navigate = useNavigate();
    const [api, contextHolder] = notification.useNotification();

    const [itemKey] = useState(() => {
        if (location.pathname.includes('/search')) return '2';
        else if (location.pathname.includes('booking-info')) return '3';
        else if (location.pathname.includes('return-ticket')) return '4';
        else if (location.pathname.includes('term-condition')) return '5';
        else if (location.pathname.includes('contact')) return '6';
        else if (location.pathname.includes('faqs')) return '7';
        else if (location.pathname.includes('login')) return '8';
        else if (location.pathname.includes('user')) return '9';

        return '1';
    });

    const { user, setUser, auth } = useContext(AuthContext);

    const [userDisplay, setUserDisplay] = useState(user);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('access_token_rt'));
        setUserDisplay(user);
    }, [user]);

    useEffect(() => {
        setUserDisplay(user);
    }, [user]);

    const handleLogOut = () => {
        setUser({});
        localStorage.removeItem('access_token_rt');
        auth.signOut();
        navigate('/');
    };

    return (
        <>
            {contextHolder}
            <header className="w-64 h-screen relative">
                <Menu className="w-full h-full !border-none" defaultSelectedKeys={itemKey} mode="inline" key="grp">
                    <Menu.Item eventKey="none" style={{ pointerEvents: 'none' }} key="heading">
                        <div className="text-[16px] font-bold text-black">Vietnam Railways</div>
                    </Menu.Item>

                    <Menu.Item key={'1'}>
                        <a href={'/'}>Home</a>
                    </Menu.Item>

                    <Menu.Item key={'2'} disabled={!isLoggedIn}>
                        <a
                            href={'/search'}
                            onClick={(e) => {
                                if (isLoggedIn) return;
                                e.preventDefault();
                                console.log(1);
                                api.info({
                                    message: "Can't access page",
                                    description: 'You must be logged in!',
                                    placement: 'topRight',
                                    duration: 3,
                                    icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
                                });
                            }}
                        >
                            Search
                        </a>
                    </Menu.Item>

                    {data.map((item) => {
                        return (
                            <Menu.Item key={item.key}>
                                <a href={item.href}>{item.content}</a>
                            </Menu.Item>
                        );
                    })}

                    <img src="/ads/3.jpeg" alt="" className="w-full p-3" />

                    <Menu.Item
                        key="9"
                        className={clsx('!absolute bottom-12 h-full font-bold', {
                            block: isLoggedIn,
                            '!hidden': !isLoggedIn,
                        })}
                    >
                        <a href="/user/info">
                            <Avatar src={userDisplay.photoURL} className="mr-4">
                                {userDisplay.photoURL ? '' : userDisplay?.displayName?.charAt(0).toUpperCase()}
                            </Avatar>
                            {userDisplay.displayName}
                        </a>
                    </Menu.Item>

                    <Menu.Item
                        key="8"
                        className={clsx('!absolute bottom-0 font-bold', {
                            block: !isLoggedIn,
                            '!hidden': isLoggedIn,
                        })}
                    >
                        <LoginOutlined className="mr-4" />
                        <a href="/login">Login</a>
                    </Menu.Item>

                    <Menu.Item
                        className={clsx('!absolute bottom-0 font-bold', {
                            block: isLoggedIn,
                            '!hidden': !isLoggedIn,
                        })}
                        onClick={handleLogOut}
                    >
                        <LogoutOutlined className="mr-4" />
                        Logout
                    </Menu.Item>
                </Menu>
            </header>
        </>
    );
};

export default Header;
