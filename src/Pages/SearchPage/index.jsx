import DefaultLayout from '../../Layouts/DefaultLayout';
import style from './style.module.css';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { Button, DatePicker, Divider, Form, List, Radio, Select, Space } from 'antd';
import { useState } from 'react';
import { data } from './station';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';

const SearchPage = () => {
    const datalist = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];
    const { RangePicker } = DatePicker;
    const [date, setDate] = useState([]);
    const [station, setStation] = useState('BT');
    const [way, setWay] = useState(1);

    const onChangePicker = (value, dateString) => {
        let temp = date;
        temp.push({
            value,
            dateString,
        });
        setDate(temp);
        console.log(date);
    };

    const onChangeStation = (value) => {
        setStation(value);
    };

    const onChangeWay = (e) => {
        setWay(e.target.value);
    };

    return (
        <DefaultLayout>
            <Header className="white-background">
                <h1>Search Ticket</h1>
            </Header>
            <Content className={clsx('white-background', style.container)}>
                <Form
                    labelCol={{
                        span: 10,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                    style={{
                        maxWidth: 600,
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
                        <Select onChange={onChangeStation} value={station}>
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
                        <Select onChange={onChangeStation} value={station}>
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
                        <RangePicker onChange={onChangePicker} disabled={[false, true]} />
                    </Form.Item>

                    <Form.Item
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Space>
                            <Button type="primary" size="large">
                                Search
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
                <Space direction="vertical">
                    <Divider orientation="left">Your cart</Divider>
                    <List size="small" bordered dataSource={datalist} renderItem={(item) => <List.Item>{item}</List.Item>} />
                </Space>
            </Content>
            <Footer className="white-background"></Footer>
        </DefaultLayout>
    );
};

export default SearchPage;
