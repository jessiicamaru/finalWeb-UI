/* eslint-disable react/prop-types */
import style from './style.module.css';
import TrainModel from '@/Components/Train/TrainModel';
import TrainCoach from '@/Components/Train/TrainCoach';
import { Content, Header } from 'antd/es/layout/layout';
import { Space } from 'antd';
import clsx from 'clsx';

import { data } from '@/station';
import { useState } from 'react';
const stationData = data;

const Result = ({ data, index }) => {
    const [activeTrain, setActiveTrain] = useState(0);

    const findStation = (stationId) => {
        const station = stationData.find((item) => {
            return item.value == stationId;
        });

        return station.name;
    };

    if (data)
        return (
            <>
                <Header className="white-background" key={data.date.departure + data.date.return + index}>
                    <h2>
                        Departing direction date {index == 0 ? data.date.departure : data.date.return} from {findStation(data.fromStation)} to{' '}
                        {findStation(data.toStation)}
                    </h2>
                </Header>
                <Content className={clsx('white-background')}>
                    <Space className={style.trainContainer}>
                        {data.list.map((train, index) => {
                            return (
                                <div
                                    key={train.trainid + index}
                                    onClick={() => {
                                        setActiveTrain(index);
                                    }}
                                >
                                    <TrainModel data={train} active={activeTrain == index} />
                                </div>
                            );
                        })}
                    </Space>
                    <div className={style.div}>
                        <Space className="w100-dp_block">
                            <TrainCoach />
                        </Space>
                    </div>
                </Content>
            </>
        );
};

export default Result;
