import style from './style.module.css';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import trainSlice from '../utils/trainSlice';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const SeatFigure = ({ position, available, number, index, isActive }) => {
    const dispatch = useDispatch();
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];

    const [active, setActive] = useState(false);
    useEffect(() => {
        setActive(isActive);
    }, [isActive]);

    const handleClick = () => {
        if (!active) {
            dispatch(
                trainSlice.actions.addTicket({
                    payload: {
                        id: uuidv4(),
                        seat: number,
                        bookingDate: formattedDate,
                    },
                    type: index == 0 ? 'departure' : 'return',
                })
            );
        }
        if (active) {
            dispatch(
                trainSlice.actions.removeTicket({
                    payload: {
                        seat: number,
                        bookingDate: formattedDate,
                    },
                    type: index == 0 ? 'departure' : 'return',
                })
            );
        }
    };

    return (
        <div
            className={style.container}
            onClick={() => {
                handleClick();
            }}
        >
            <div
                className={style.seat}
                style={{
                    flexDirection: position ? 'row' : 'row-reverse',
                }}
            >
                <div
                    className={clsx(style.main, {
                        [style.available]: available,
                        [style.unavailable]: !available,
                        [style.active]: isActive || active,
                    })}
                >
                    {number}
                </div>
                <div className={style.bar}></div>
            </div>
        </div>
    );
};

export default SeatFigure;
