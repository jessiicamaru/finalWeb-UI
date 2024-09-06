import DefaultLayout from '../../Layouts/DefaultLayout';
import style from './style.module.css';
import { Content, Footer, Header } from 'antd/es/layout/layout';
// import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';
import TrainModel from './TrainModel';
import { Space } from 'antd';
import TrainCoach from './TrainCoach';

const Booking = () => {
    return (
        <DefaultLayout>
            <Header className="white-background">
                <h1>Departing direction date 20/09/2024 from... to...</h1>
            </Header>
            <Content className={clsx('white-background', style.container)}>
                <Space style={{ display: 'flex', justifyContent: 'space-between', margin: '36px 0' }}>
                    <TrainModel />
                    <TrainModel />
                    <TrainModel />
                    <TrainModel />
                    <TrainModel />
                    <TrainModel />
                    <TrainModel />
                </Space>
                <Space>
                    <TrainCoach />
                </Space>
            </Content>
            <Footer className="white-background"></Footer>
        </DefaultLayout>
    );
};

export default Booking;
