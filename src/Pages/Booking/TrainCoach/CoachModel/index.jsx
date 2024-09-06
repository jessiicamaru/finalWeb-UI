import style from './style.module.css';
import clsx from 'clsx';

// eslint-disable-next-line react/prop-types
const CoachModel = ({ data, name = '' }) => {
    // eslint-disable-next-line react/prop-types
    let { coach, available } = data;
    if (coach == 0) {
        return (
            <div
                className={clsx(style.block, {
                    [style.mouseEventNone]: !available,
                })}
            >
                <div className={style.icon}>
                    <img src="/Train/head.png" alt="head" />
                </div>
                <div>{name}</div>
            </div>
        );
    } else {
        return (
            <div
                className={clsx(style.block, {
                    [style.mouseEventNone]: !available,
                })}
            >
                <div
                    className={clsx(style.icon, {
                        [style.available]: available,
                        [style.unavailable]: !available,
                    })}
                >
                    <img src="/Train/train.png" alt="head" />
                </div>
                <div>{coach}</div>
            </div>
        );
    }
};

export default CoachModel;
