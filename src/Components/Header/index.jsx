import { Menu } from 'antd';

const Header = () => {
    return (
        <header className="w-64 h-full">
            <Menu className="w-full h-full" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" key="grp">
                <Menu.Item eventKey="none" style={{ pointerEvents: 'none' }}>
                    <div className="text-[16px] font-bold text-black">Booking Train Ticket</div>
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
