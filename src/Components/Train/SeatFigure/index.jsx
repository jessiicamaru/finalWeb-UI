import style from './style.module.css';
import clsx from 'clsx';

// eslint-disable-next-line react/prop-types
const SeatFigure = ({ position, available, active }) => {
    return (
        <div className={style.container}>
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
                    33
                </div>
                <div className={style.bar}></div>
            </div>
        </div>
    );
};

export default SeatFigure;
