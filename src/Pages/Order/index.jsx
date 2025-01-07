import { AuthContext } from '@/context/AuthProvider';
import { Col, Empty, Input, Row, Select, Typography } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import axios from '@/config/axios';
import UserLayout from '@/Layouts/UserLayout';
import useDebounce from '@/hooks/useDebounced';

const Order = () => {
    const { user } = useContext(AuthContext);
    const [u, setU] = useState({});
    const [list, setList] = useState([]);
    const [displayList, setDisplayList] = useState([]);

    const [option, setOption] = useState('all');

    const [searchValue, setSearchValue] = useState('');
    const debounced = useDebounce(searchValue, 300);

    useEffect(() => {
        console.log(user);
        if (Object.keys(user.firebase).length && Object.keys(user.db).length) {
            console.log(user);
            setU(user.db);
        }
    }, [user]);

    const handleChange = (value) => {
        setOption(value);
    };

    const formatDate = (date) => {
        const localDate = new Date(date);
        return localDate.toLocaleDateString('en-GB');
    };

    const formatCurrency = (currency) => {
        return currency.slice(0, 3) + '.' + currency.slice(3, 7) + ' VND';
    };

    useEffect(() => {
        if (!debounced) {
            setDisplayList(list);
        } else {
            const filtered = list.filter((item) => {
                return JSON.stringify(item).toLowerCase().includes(debounced.toLowerCase());
            });
            setDisplayList(filtered);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounced]);

    useEffect(() => {
        //http://localhost:4000/api/v3/get-order/?uid=Xzcnka6u4CVjvSfCqAUCmGQuhst2
        const fn = async () => {
            const res = await axios.get(import.meta.env.VITE_API_URL_V3 + `/get-order/?uid=${u.UID}`);

            if (res.data) {
                console.log(res.data.data);
                const temp = res.data.data.map((item) => {
                    return {
                        ...item,
                        Depart: item.Depart.slice(0, 5),
                        Arrive: item.Arrive.slice(0, 5),
                        BookingDate: formatDate(item.BookingDate),
                        Price: formatCurrency(String(item.Price)),
                        searchData: JSON.stringify(item),
                    };
                });

                setList(temp);
                setDisplayList(temp);
            }
        };

        if (u?.UID) fn();
    }, [u.UID]);

    function parseDate(dateString) {
        const [day, month, year] = dateString.split('/');
        return new Date(year, month - 1, day);
    }

    return (
        Object.keys(u).length && (
            <UserLayout>
                <Typography.Title level={2} className="text-center w-full !font-bold !mb-12">
                    Detail orders
                </Typography.Title>
                <Row className="w-full">
                    <Row className="w-full p-4" justify={'space-between'}>
                        <Col span={8}>
                            <Select
                                defaultValue="all"
                                onChange={handleChange}
                                className="w-full"
                                options={[
                                    {
                                        value: 'all',
                                        label: 'All',
                                    },
                                    {
                                        value: 'expired',
                                        label: 'Expired',
                                    },
                                    {
                                        value: 'incoming',
                                        label: 'Incoming',
                                    },
                                ]}
                            />
                        </Col>
                        <Col span={10}>
                            <Row wrap={false} justify="space-between">
                                <Col span={24}>
                                    <Input
                                        value={searchValue}
                                        placeholder="Search"
                                        className="w-full"
                                        prefix={<SearchOutlined />}
                                        onChange={(e) => {
                                            setSearchValue(e.target.value);
                                        }}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="w-full p-4">
                        <Row className="w-full border-[1px] rounded-xl p-3">
                            {displayList
                                .filter((item) => {
                                    if (option == 'all') return item;

                                    let today = new Date();
                                    let day = String(today.getDate()).padStart(2, '0');
                                    let month = String(today.getMonth() + 1).padStart(2, '0');
                                    let year = today.getFullYear();

                                    let currentDate = `${day}/${month}/${year}`;

                                    let date1 = parseDate(currentDate);
                                    let date2 = parseDate(item.BookingDate);

                                    if (date1 > date2 && option == 'expired') {
                                        return item;
                                    }

                                    if (date1 < date2 && option == 'incoming') {
                                        return item;
                                    }
                                })
                                .map((item) => {
                                    return (
                                        <Row key={item.TicketID} className="w-full p-3 mb-4" justify="center">
                                            <Row className="bg-white shadow-lg p-3 rounded-xl">
                                                <Row className="w-full p-4">
                                                    <Typography.Title className="font-bold w-full text-center" level={4}>
                                                        Ticket Info
                                                    </Typography.Title>
                                                    <Row className="w-full mt-1">
                                                        <Col span={12} className="w-full">
                                                            <Row>
                                                                <Col span={12} className="font-bold">
                                                                    Ticket ID:
                                                                </Col>
                                                                <Col span={12}>{item.TicketID}</Col>
                                                            </Row>
                                                        </Col>
                                                        <Col span={12}>
                                                            <Row>
                                                                <Col span={12} className="font-bold">
                                                                    Train:
                                                                </Col>
                                                                <Col span={12}>{item.TrainID}</Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>

                                                    <Row className="w-full mt-1">
                                                        <Col span={12} className="w-full">
                                                            <Row>
                                                                <Col span={12} className="font-bold">
                                                                    Coach:
                                                                </Col>
                                                                <Col span={12}>{item.Coach}</Col>
                                                            </Row>
                                                        </Col>
                                                        <Col span={12}>
                                                            <Row>
                                                                <Col span={12} className="font-bold">
                                                                    Seat:
                                                                </Col>
                                                                <Col span={12}>{item.Position}</Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>

                                                    <Row className="w-full mt-1">
                                                        <Col span={12} className="w-full">
                                                            <Row>
                                                                <Col span={12} className="font-bold">
                                                                    Depart station:
                                                                </Col>
                                                                <Col span={12}>{item.DepartStation}</Col>
                                                            </Row>
                                                        </Col>
                                                        <Col span={12}>
                                                            <Row>
                                                                <Col span={12} className="font-bold">
                                                                    Arrive station:
                                                                </Col>
                                                                <Col span={12}>{item.ArriveStation}</Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>

                                                    <Row className="w-full mt-1">
                                                        <Col span={12} className="w-full">
                                                            <Row>
                                                                <Col span={12} className="font-bold">
                                                                    Depart at:
                                                                </Col>
                                                                <Col span={12}>{item.Depart.slice(0, 5)}</Col>
                                                            </Row>
                                                        </Col>
                                                        <Col span={12}>
                                                            <Row>
                                                                <Col span={12} className="font-bold">
                                                                    Arrive at:
                                                                </Col>
                                                                <Col span={12}>{item.Arrive.slice(0, 5)}</Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>

                                                    <Row className="w-full mt-1">
                                                        <Col span={12} className="w-full">
                                                            <Row>
                                                                <Col span={12} className="font-bold">
                                                                    Booking date:
                                                                </Col>
                                                                <Col span={12}>{item.BookingDate}</Col>
                                                            </Row>
                                                        </Col>
                                                        <Col span={12}>
                                                            <Row>
                                                                <Col span={12} className="font-bold">
                                                                    Price:
                                                                </Col>
                                                                <Col span={12}>{item.Price}</Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </Row>
                                                <Row className="w-full p-4">
                                                    <Row className="w-full">
                                                        <Typography.Title className="font-bold w-full text-center" level={4}>
                                                            Customer Info
                                                        </Typography.Title>
                                                        <Row className="w-full mt-1">
                                                            <Col span={12} className="w-full">
                                                                <Row>
                                                                    <Col span={12} className="font-bold">
                                                                        Email:
                                                                    </Col>
                                                                    <Col span={12}>{item.cus_email}</Col>
                                                                </Row>
                                                            </Col>
                                                            <Col span={12}>
                                                                <Row>
                                                                    <Col span={12} className="font-bold">
                                                                        ID Number:
                                                                    </Col>
                                                                    <Col span={12}>{item.cus_id}</Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>

                                                        <Row className="w-full mt-1">
                                                            <Col span={12} className="w-full">
                                                                <Row>
                                                                    <Col span={12} className="font-bold">
                                                                        Phone:
                                                                    </Col>
                                                                    <Col span={12}>{item.cus_phone}</Col>
                                                                </Row>
                                                            </Col>
                                                            <Col span={12}>
                                                                <Row>
                                                                    <Col span={12} className="font-bold">
                                                                        Name/Full name:
                                                                    </Col>
                                                                    <Col span={12}>{item.cus_name}</Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </Row>
                                                </Row>
                                            </Row>
                                        </Row>
                                    );
                                })}

                            {!displayList && <Empty />}
                        </Row>
                    </Row>
                </Row>
            </UserLayout>
        )
    );
};

export default Order;
