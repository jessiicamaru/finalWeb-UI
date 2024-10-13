import DefaultLayout from '../../Layouts/DefaultLayout';
import style from './style.module.css';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Button, DatePicker, Form, Radio, Select, Space, notification } from 'antd';
import { useEffect, useState } from 'react';
import { data } from '@/station';
import validateForm from './validateForm';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import axios from '@/config/axios';

import { InfoCircleFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import trainSlice from '@/utils/trainSlice';
import dayjs from 'dayjs';

const SearchPage = () => {
    const [date, setDate] = useState({});
    const [fromStation, setFromStation] = useState(null);
    const [toStation, setToStation] = useState(null);
    const [way, setWay] = useState(null);
    const [returnState, setreturnState] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const today = new Date();
    const dateFormat = 'YYYY-MM-DD';
    const formattedDate = today.toISOString().split('T')[0];

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

        const flag = validateForm(
            {
                fromStation,
                toStation,
                way,
                date,
            },
            openNotification
        );

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

    console.log('data', {
        fromStation,
        toStation,
        way,
        date,
    });

    const openNotification = ({ message, description }) => {
        api.info({
            message,
            description,
            placement: 'top',
            duration: 3,
            icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
        });
    };

    useEffect(() => {
        dispatch(trainSlice.actions.reset({}));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // console.log({
    //     fromStation,
    //     toStation,
    //     way,
    //     date,
    // });

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
                                <DatePicker onChange={onChangeDeparture} minDate={dayjs(formattedDate, dateFormat)} placement="topLeft" />
                                <DatePicker onChange={onChangeReturn} disabled={returnState} minDate={dayjs(formattedDate, dateFormat)} />
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
