import { Menu } from 'antd';
import Link from 'antd/es/typography/Link';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const UserSideBar = () => {
    const location = useLocation();

    const [itemKey] = useState(() => {
        if (location.pathname.includes('/user/info')) return '1';
        else if (location.pathname.includes('/user/orders')) return '2';

        return '1';
    });

    return (
        <Menu defaultSelectedKeys={itemKey} key="grp" className="h-full">
            <Menu.Item key="1">
                <Link href="/user/info">Information</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link href="/user/orders">Orders</Link>
            </Menu.Item>
        </Menu>
    );
};

export default UserSideBar;
