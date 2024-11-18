import DefaultLayout from '../../Layouts/DefaultLayout';
import { Content, Header } from 'antd/es/layout/layout';
import { Button, DatePicker, Form, Radio, Select, Space, notification } from 'antd';
import { useEffect, useState } from 'react';
import { data } from '@/station';
import validateForm from '@/utils/validateForm';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import axios from '@/config/axios';

import { InfoCircleFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import trainSlice from '@/utils/trainSlice';
import dayjs from 'dayjs';
import moment from 'moment';

const SearchPage = () => {
    const [date, setDate] = useState({});
    const [fromStation, setFromStation] = useState(null);
    const [toStation, setToStation] = useState(null);
    const [way, setWay] = useState(null);
    const [returnState, setreturnState] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    const navigate = useNavigate();

    const dispatch = useDispatch();

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

        const dataToValidate = {
            'Depart station': {
                data: fromStation,
                rules: [validateForm.isRequired],
                icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
            },
            'Arrive station': {
                data: toStation,
                rules: [validateForm.isRequired],
                icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
            },
            'Type of travel': {
                data: way,
                rules: [validateForm.isRequired],
                icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
            },
            Date: {
                data: {
                    Date: date,
                    'Type of travel': way,
                },
                rules: [validateForm.isRequiredDate],
                icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
            },
            'Depart station and Arrive station': {
                data: {
                    fromStation,
                    toStation,
                },
                rules: [validateForm.isDuplicateDestination],
                icon: <InfoCircleFilled style={{ color: '#f9bf02' }} />,
            },
        };

        const flag = validateForm(dataToValidate, openNotification);

        if (flag) {
            let response = await axios.post(import.meta.env.VITE_API_URL_V1 + '/senddata', {
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
                <Header className="bg-white flex items-center font-bold max-[640px]:justify-center">
                    <h1 className="text-3xl">Search Ticket</h1>
                </Header>
                <Content className="bg-white flex justify-between max-[640px]:justify-center">
                    <Form
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        layout="horizontal"
                        className="min-w-[70%]"
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
                                <DatePicker
                                    onChange={onChangeDeparture}
                                    minDate={dayjs(moment().format('YYYY-MM-DD'))}
                                    placement="topLeft"
                                    showToday={false}
                                />
                                <DatePicker
                                    onChange={onChangeReturn}
                                    disabled={returnState}
                                    minDate={dayjs(moment().format('YYYY-MM-DD'))}
                                    showToday={false}
                                />
                            </Space>
                        </Form.Item>

                        <Form.Item className="flex items-center justify-center">
                            <Space>
                                <Button type="primary" size="large" onClick={onSubmit}>
                                    Search
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Content>
            </DefaultLayout>
        </>
    );
};

export default SearchPage;
