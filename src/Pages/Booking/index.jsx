import DefaultLayout from '@/Layouts/DefaultLayout';
import style from './style.module.css';
import { Content, Header } from 'antd/es/layout/layout';
import clsx from 'clsx';
import TrainModel from '@/Components/Train/TrainModel';
import { Space } from 'antd';
import TrainCoach from '@/Components/Train/TrainCoach';
import Coach from '@/Components/Train/Coach';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { data } from '@/station';
const stationData = data;

const Booking = () => {
    const location = useLocation();
    const [data, setData] = useState(null);
    console.log('location', location.state.data);

    useEffect(() => {
        location.state.data && setData(location.state.data);
    }, [location.state.data]);

    const findStation = (stationId) => {
        const station = stationData.find((item) => {
            return item.value == stationId;
        });

        return station.name;
    };

    return (
        <DefaultLayout>
            {data &&
                data.data.map((way, index) => {
                    console.log(way);
                    return (
                        <>
                            <Header className="white-background" key={way.date.departure + way.date.return + index}>
                                <h2>
                                    Departing direction date {index == 0 ? way.date.departure : way.date.return} from {findStation(way.fromStation)}{' '}
                                    to {findStation(way.toStation)}
                                </h2>
                            </Header>
                            <Content className={clsx('white-background', style.container)}>
                                <Space style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', margin: '36px auto' }}>
                                    {way.list.map((train, index) => {
                                        return <TrainModel data={train} key={train.trainid + index} />;
                                    })}
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
                        </>
                    );
                })}
        </DefaultLayout>
    );
};

export default Booking;
