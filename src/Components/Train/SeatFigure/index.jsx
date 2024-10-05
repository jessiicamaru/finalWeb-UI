import style from './style.module.css';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import trainSlice from '../utils/trainSlice';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const SeatFigure = ({ position, available, number, index }) => {
    const dispatch = useDispatch();
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
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
                        [style.active]: active,
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
