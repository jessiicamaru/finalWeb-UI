/* eslint-disable react/prop-types */
import style from './style.module.css';
import TrainModel from '@/Components/Train/TrainModel';
import TrainCoach from '@/Components/Train/TrainCoach';
import { Content, Header } from 'antd/es/layout/layout';
import { Space } from 'antd';

import { data } from '@/station';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '@/config/axios';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import trainSlice from '../Train/utils/trainSlice';

const stationData = data;

const Result = ({ data, index }) => {
    console.log(data);
    const APIUrl = 'http://localhost:4000/api/v1/searchUnavailableCoachByTrain?';
    const [activeTrain, setActiveTrain] = useState(data.list[0].trainid);
    const [coachData, setCoachData] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { date, fromStation, toStation } = data;

    const findStation = (stationId) => {
        const station = stationData.find((item) => {
            return item.value == stationId;
        });

        return station.name;
    };

    useEffect(() => {
        const fn = async () => {
            try {
                let response = await axios.get(APIUrl + `trainid=${activeTrain}&date=${date.departure}&depart=${fromStation}&arrive=${toStation}`);

                if (response) {
                    setCoachData(response.data.data);
                }
            } catch {
                navigate('/search');
            }
        };

        fn();

        if (index == 0) {
            dispatch(
                trainSlice.actions.setDepartureDate({
                    fromStation,
                    toStation,
                })
            );
        } else {
            dispatch(
                trainSlice.actions.setReturnDate({
                    fromStation: toStation,
                    toStation: fromStation,
                })
            );
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTrain]);

    const handleClick = (id) => {
        if (index == 0) {
            dispatch(trainSlice.actions.setDepartureTrain(id));
        } else {
            dispatch(trainSlice.actions.setReturnTrain(id));
        }
        setActiveTrain(id);
    };

    useEffect(() => {
        if (index == 0) {
            dispatch(trainSlice.actions.setDepartureTrain(activeTrain));
        } else {
            dispatch(trainSlice.actions.setReturnTrain(activeTrain));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                                        handleClick(train.trainid);
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
                                    date: data.date.departure,
                                    departStation: data.fromStation,
                                    arriveStation: data.toStation,
                                    index,
                                }}
                            />
                        </Space>
                    </div>
                </Content>
            </>
        );
};

export default Result;