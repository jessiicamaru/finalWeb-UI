/* eslint-disable react/prop-types */
import style from './style.module.css';
import CoachSide from './CoachSide';

const Coach = ({ data, coach, index }) => {
    const bookedSeats = data.map((seat) => seat.Position);
    const isAvailable = (position) => !bookedSeats.includes(position);

    return (
        <div className="w100-dp_block">
            <h2 className={style.title}>Coach number {coach}</h2>

            <div className={style.container}>
                <div className={style.leftSide}>
                    <CoachSide index={index} isAvailable={isAvailable} step={1} />
                    <CoachSide index={index} isAvailable={isAvailable} step={17} />
                </div>
                <div className={style.boundary}>
                    <div className={style.table}></div>
                    <div className={style.table}></div>
                </div>

                <div className={style.leftSide}>
                    <CoachSide index={index} isAvailable={isAvailable} step={33} horizonal />
                    <CoachSide index={index} isAvailable={isAvailable} step={49} horizonal />
                </div>
            </div>
        </div>
    );
};

export default Coach;
