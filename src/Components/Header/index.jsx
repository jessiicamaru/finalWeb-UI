import style from './style.module.css';
import { Menu } from 'antd';

const Header = () => {
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
                key="grp"
            >
                <Menu.Item eventKey="none" style={{ pointerEvents: 'none' }}>
                    <div
                        style={{
                            color: 'black',
                            fontSize: '16px',
                            fontWeight: 'bold',
                        }}
                    >
                        Booking Train Ticket
                    </div>
                </Menu.Item>
                <Menu.Item>
                    <a href="/search">Search</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="/booking-info">Booking Info</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="/return-ticket">Return Ticket</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="/term-condition">Terms & Conditions</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="/contact">Contact</a>
                </Menu.Item>
            </Menu>
        </header>
    );
};

export default Header;
