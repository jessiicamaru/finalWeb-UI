/* eslint-disable react/prop-types */
import style from './style.module.css';
import TrainModel from '@/Components/Train/TrainModel';
import TrainCoach from '@/Components/Train/TrainCoach';
import { Content, Header } from 'antd/es/layout/layout';
import { Space } from 'antd';

import { data } from '@/station';
import { useEffect, useState } from 'react';
import axios from 'axios';
import clsx from 'clsx';

const stationData = data;

const Result = ({ data, index }) => {
    const APIUrl = 'http://localhost:4000/api/v1/searchUnavailableCoachByTrain?';
    const [activeTrain, setActiveTrain] = useState(data.list[0].trainid);
    const [coachData, setCoachData] = useState([]);

    const { date, fromStation, toStation } = data;

    const findStation = (stationId) => {
        const station = stationData.find((item) => {
            return item.value == stationId;
        });

        return station.name;
    };

    useEffect(() => {
        const fn = async () => {
            let response = await axios.get(APIUrl + `trainid=${activeTrain}&date=${date.departure}&depart=${fromStation}&arrive=${toStation}`);

            if (response) {
                setCoachData(response.data.data);

                console.log(response.data.data);
            }
        };

        fn();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTrain]);

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
                                        setActiveTrain(train.trainid);
                                    }}
                                >
                                    <TrainModel data={train} active={activeTrain == train.trainid} />
                                </div>
                            );
                        })}
                    </Space>
                    <div className={style.div}>
                        <Space className="w100-dp_block">
                            <TrainCoach
                                data={{
                                    name: activeTrain,
                                    coachData,
                                }}
                            />
                        </Space>
                    </div>
                </Content>
            </>
        );
};

export default Result;
