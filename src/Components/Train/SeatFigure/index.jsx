import style from './style.module.css';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import trainSlice from '@/utils/trainSlice';

// eslint-disable-next-line react/prop-types
const SeatFigure = ({ position, available, number, index, isActive }) => {
    const dispatch = useDispatch();
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];

    const checkCost = (seat) => {
        if ((0 < seat && seat < 9) || (32 < seat && seat < 41) || (24 < seat && seat < 33) || (56 < seat && seat < 65)) {
            return 450000;
        } else {
            return 350000;
        }
    };

    const handleClick = () => {
        if (!isActive) {
            dispatch(
                trainSlice.actions.addTicket({
                    payload: {
                        id: uuidv4(),
                        seat: number,
                        bookingDate: formattedDate,
                        cost: checkCost(number),
                    },
                    type: index == 0 ? 'departure' : 'return',
                })
            );
        }
        if (isActive) {
            dispatch(
                trainSlice.actions.removeTicket({
                    payload: {
                        seat: number,
                        bookingDate: formattedDate,
                        cost: checkCost(number),
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
                        [style.active]: isActive,
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
