import DefaultLayout from '@/Layouts/DefaultLayout';
import style from './style.module.css';
import { Content, Header } from 'antd/es/layout/layout';
import clsx from 'clsx';
import TrainModel from '@/Components/Train/TrainModel';
import { Space } from 'antd';
import TrainCoach from '@/Components/Train/TrainCoach';
import Coach from '@/Components/Train/Coach';

const Booking = () => {
    return (
        <DefaultLayout>
            <Header className="white-background">
                <h1>Departing direction date 20/09/2024 from... to...</h1>
            </Header>
            <Content className={clsx('white-background', style.container)}>
                <Space style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: '36px 0' }}>
                    <TrainModel />
                    <TrainModel />
                    <TrainModel />
                    <TrainModel />
                    <TrainModel />
                    <TrainModel />
                    <TrainModel />
                </Space>
                <div
                    style={{
                        width: '90%',
                        margin: '24px auto',
                    }}
                >
                    <Space
                        style={{
                            width: '100%',
                        }}
                    >
                        <TrainCoach />
                    </Space>
                </div>

                <Coach />
            </Content>
        </DefaultLayout>
    );
};

export default Booking;
