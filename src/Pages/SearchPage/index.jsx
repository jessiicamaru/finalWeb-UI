import DefaultLayout from '../../Layouts/DefaultLayout';
import style from './style.module.css';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Button, DatePicker, Form, Radio, Select, Space, notification } from 'antd';
import { useEffect, useState } from 'react';
import { data } from '@/station';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import axios from 'axios';

import { InfoCircleFilled } from '@ant-design/icons';

const SearchPage = () => {
    const [date, setDate] = useState({});
    const [fromStation, setFromStation] = useState(null);
    const [toStation, setToStation] = useState(null);
    const [way, setWay] = useState(null);
    const [returnState, setreturnState] = useState(null);
    const [api, contextHolder] = notification.useNotification();
    const navigate = useNavigate();

    const onChangeDeparture = (value, dateString) => {
        setDate({
            ...date,
            departure: dateString,
        });
    };

    const onChangeReturn = (value, dateString) => {
        setDate({
            ...date,
            return: dateString,
        });
    };

    const onChangeFromStation = (value) => {
        setFromStation(value);
    };

    const onChangeToStation = (value) => {
        setToStation(value);
    };

    const onChangeWay = (e) => {
        setWay(e.target.value);
    };

    useEffect(() => {
        if (way == 1) {
            setreturnState(true);
        } else if (way == 2) {
            setreturnState(false);
        }
    }, [way]);

    const onSubmit = async (e) => {
        e.preventDefault();

        const flag = validateForm({
            fromStation,
            toStation,
            way,
            date,
        });

        if (flag) {
            let response = await axios.post('http://localhost:4000/api/v1/senddata', {
                data: {
                    fromStation,
                    toStation,
                    way,
                    date,
                },
            });

            navigate('/search/booking', { state: { data: response.data } });
        }
    };

    const validateForm = (data) => {
        let flag = true;
        let time = 300;
        if (!data.fromStation) {
            setTimeout(() => {
                openNotification({ message: 'Form is incomplete', description: 'Choose your depart station!' });
            }, time);
            time += 300;
            flag = false;
        }

        if (!data.toStation) {
            setTimeout(() => {
                openNotification({ message: 'Form is incomplete', description: 'Choose your arrive station!' });
            }, time);
            time += 300;
            flag = false;
        }

        if (!data.way) {
            setTimeout(() => {
                openNotification({ message: 'Form is incomplete', description: 'Choose your trip type!' });
            }, time);
            time += 300;
            flag = false;
        }

        if (Object.keys(data.date).length === 0) {
            setTimeout(() => {
                openNotification({ message: 'Form is incomplete', description: 'Choose your date!' });
            }, time);
            time += 300;
            flag = false;
        } else {
            const today = new Date();
            const departDate = new Date(data.date.departure);
            const returnDate = new Date(data.date.return);
            console.log({
                departDate,
                returnDate,
                today,
            });

            if (departDate < today) {
                setTimeout(() => {
                    openNotification({ message: 'Form is invalid', description: 'Departure day is in past' });
                }, time);
                time += 300;
                flag = false;
            }
            if (returnDate < today) {
                setTimeout(() => {
                    openNotification({ message: 'Form is invalid', description: 'Return day is in past' });
                }, time);
                time += 300;
                flag = false;
            }

            if (departDate > returnDate) {
                setTimeout(() => {
                    openNotification({ message: 'Form is invalid', description: 'Return day must not be smaller then departure day' });
                }, time);
                time += 300;
                flag = false;
            }
        }

        return flag;
    };

    const openNotification = ({ message, description }) => {
        api.info({
            message,
            description,
            placement: 'top',
            duration: 3,
            icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
        });
    };

    console.log({
        fromStation,
        toStation,
        way,
        date,
    });

    return (
        <>
            {contextHolder}
            <DefaultLayout>
                <Header className="white-background">
                    <h1>Search Ticket</h1>
                </Header>
                <Content className={clsx('white-background', style.container)}>
                    <Form
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        layout="horizontal"
                        style={{
                            minWidth: '70%',
                        }}
                    >
                        <Form.Item
                            label="From"
                            name="From"
                            rules={[
                                {
                                    required: true,
                                    message: 'Choose depart station',
                                },
                            ]}
                        >
                            <Select onChange={onChangeFromStation} value={fromStation}>
                                {data.map((item) => {
                                    let temp = uuidv4();
                                    return (
                                        <Select.Option key={temp} value={item.value}>
                                            {item.name}
                                        </Select.Option>
                                    );
                                })}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="To"
                            name="To"
                            rules={[
                                {
                                    required: true,
                                    message: 'Choose arrive station',
                                },
                            ]}
                        >
                            <Select onChange={onChangeToStation} value={toStation}>
                                {data.map((item) => {
                                    let temp = uuidv4();
                                    return (
                                        <Select.Option key={temp} value={item.value}>
                                            {item.name}
                                        </Select.Option>
                                    );
                                })}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label=" "
                            name="WayPicker"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Radio.Group onChange={onChangeWay} value={way}>
                                <Radio value={1}>One way</Radio>
                                <Radio value={2}>Round trip</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item
                            label="Departure and Return"
                            name="RangePicker"
                            rules={[
                                {
                                    required: true,
                                    message: 'Choose time range',
                                },
                            ]}
                        >
                            <Space>
                                <DatePicker onChange={onChangeDeparture} />
                                <DatePicker onChange={onChangeReturn} disabled={returnState} />
                            </Space>
                        </Form.Item>

                        <Form.Item
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Space>
                                <Button type="primary" size="large" onClick={onSubmit}>
                                    Search
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Content>
                <Footer className="white-background"></Footer>
            </DefaultLayout>
        </>
    );
};

export default SearchPage;
