import style from '../style.module.css';
import clsx from 'clsx';

// eslint-disable-next-line react/prop-types
const BareSeatFigure = ({ position, available, number, isActive }) => {
    return (
        <div className={style.bareContainer}>
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

export default BareSeatFigure;
