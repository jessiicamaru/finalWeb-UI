/* eslint-disable react/prop-types */
import Coach from '../Coach';
import CoachFigure from '../CoachFigure';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import trainSlice from '@/utils/trainSlice';

import { useState, memo, useEffect } from 'react';
import axios from '@/config/axios';

const fakeData = {
    name: 'SE8',
    coaches: [
        {
            coach: 0,
        },
        {
            coach: 1,
        },
        {
            coach: 2,
        },
        {
            coach: 3,
        },
        {
            coach: 4,
        },
        {
            coach: 5,
        },
        {
            coach: 6,
        },
    ],
};

const TrainCoach = ({ data }) => {
    const APIUrl = 'http://localhost:4000/api/v1/searchUnavailableSeatbyCoach?';
    const [activeCoach, setActiveCoach] = useState(1);
    const [seatData, setSeatData] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const generate = fakeData.coaches.map((item) => {
        const isExist = data.coachData.find((coach) => {
            return coach.Coach == item.coach;
        });

        if (isExist) {
            return {
                coach: item.coach,
                available: false,
            };
        } else {
            return {
                coach: item.coach,
                available: true,
            };
        }
    });

    const handleClick = (index) => {
        dispatch(
            trainSlice.actions.setCoach({
                payload: index,
                type: data.index == 0 ? 'departure' : 'return',
            })
        );
    };

    useEffect(() => {
        handleClick(1);
        setActiveCoach(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    useEffect(() => {
        const fn = async () => {
            try {
                let response = await axios.get(
                    APIUrl + `trainid=${data.name}&coach=${activeCoach}&date=${data.date}&depart=${data.departStation}&arrive=${data.arriveStation}`
                );

                if (response) {
                    setSeatData(response.data.data);
                }
            } catch {
                navigate('/search');
            }
        };

        fn();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeCoach]);

    return (
        <div>
            {generate.map((item, index) => {
                if (item.coach != 0) {
                    return (
                        <span
                            key={index + item}
                            onClick={() => {
                                setActiveCoach(index);
                                handleClick(index);
                            }}
                        >
                            <CoachFigure data={item} active={activeCoach == item.coach} available={item.available} />
                        </span>
                    );
                } else if (item.coach == 0) {
                    return (
                        <span key={index + item}>
                            <CoachFigure data={item} name={data.name} active={activeCoach == index} />
                        </span>
                    );
                }
            })}

            <Coach data={seatData} coach={activeCoach} index={data.index} />
        </div>
    );
};

export default memo(TrainCoach);
