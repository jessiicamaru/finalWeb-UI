import DefaultLayout from '../../Layouts/DefaultLayout';
import style from './style.module.css';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Button, DatePicker, Form, Radio, Select, Space } from 'antd';
import { useEffect, useState } from 'react';
import { data } from './station';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import axios from 'axios';

const SearchPage = () => {
    const [date, setDate] = useState({});
    const [fromStation, setFromStation] = useState(null);
    const [toStation, setToStation] = useState(null);
    const [way, setWay] = useState(null);
    const [returnState, setreturnState] = useState(null);
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

        let response = await axios.post('http://localhost:4000/api/v1/senddata', {
            data: {
                fromStation,
                toStation,
                way,
                date,
            },
        });

        console.log(response);

        navigate('/search/booking', { state: { data: response.data } });
    };

    console.log('station', {
        fromStation,
        toStation,
        way,
        date,
    });

    return (
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
    );
};

export default SearchPage;
