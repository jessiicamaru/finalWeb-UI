import style from './style.module.css';
import { Menu } from 'antd';

const Header = () => {
    const items = [
        {
            key: 'grp',
            label: 'Booking Train Ticket',
            type: 'group',
            children: [
                {
                    type: 'divider',
                },
                {
                    key: '1',
                    label: 'Search',
                },
                {
                    type: 'divider',
                },
                {
                    key: '2',
                    label: 'Booking Info',
                },
                {
                    type: 'divider',
                },
                {
                    key: '3',
                    label: 'Return Ticket',
                },
                {
                    type: 'divider',
                },
                {
                    key: '4',
                    label: 'Terms & Conditions',
                },
                {
                    type: 'divider',
                },
                {
                    key: '5',
                    label: 'Contact',
                },
                {
                    type: 'divider',
                },
            ],
        },
    ];

    return (
        <header className={style.header}>
            <Menu
                style={{
                    width: '100%',
                    height: '100%',
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </header>
    );
};

export default Header;
