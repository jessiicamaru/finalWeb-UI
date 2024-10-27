import { Menu } from 'antd';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const data = [
        {
            key: '1',
            href: '/',
            content: 'Home',
        },
        {
            key: '2',
            href: '/search',
            content: 'Search',
        },
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
    ];

    const location = useLocation();
    const [itemKey] = useState(() => {
        for (let i = 0; i < 5; i++) {
            if (location.pathname.includes('/search')) return '2';
            else if (location.pathname.includes('booking-info')) return '3';
            else if (location.pathname.includes('return-ticket')) return '4';
            else if (location.pathname.includes('term-condition')) return '5';
            else if (location.pathname.includes('contact')) return '6';
        }

        return '1';
    });

    return (
        <header className="w-64">
            <Menu className="w-full h-full" defaultSelectedKeys={itemKey} mode="inline" key="grp">
                <Menu.Item eventKey="none" style={{ pointerEvents: 'none' }} key="heading">
                    <div className="text-[16px] font-bold text-black">Booking Train Ticket</div>
                </Menu.Item>
                {data.map((item) => {
                    return (
                        <Menu.Item key={item.key}>
                            <a href={item.href}>{item.content}</a>
                        </Menu.Item>
                    );
                })}
            </Menu>
        </header>
    );
};

export default Header;
