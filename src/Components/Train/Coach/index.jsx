/* eslint-disable react/prop-types */
import style from './style.module.css';
import SeatFigure from '../SeatFigure';

const Coach = ({ data, coach }) => {
    const bookedSeats = data.map((seat) => seat.Position);
    const arr = Array.from({ length: 16 }, (_, i) => i + 1);
    const isAvailable = (position) => !bookedSeats.includes(position);

    console.log({ data });

    return (
        <div className="w100-dp_block">
            <h2 className={style.title}>Coach number {coach}</h2>

            <div className={style.container}>
                <div className={style.leftSide}>
                    <div className={style.side}>
                        {arr.map((item, index) => {
                            const position = index + 1;
                            return <SeatFigure key={position} number={position} available={isAvailable(position)} />;
                        })}
                    </div>
                    <div className={style.side}>
                        {arr.map((item, index) => {
                            const position = index + 17;
                            return <SeatFigure key={position} number={position} available={isAvailable(position)} />;
                        })}
                    </div>
                </div>
                <div className={style.boundary}>
                    <div className={style.table}></div>
                    <div className={style.table}></div>
                </div>

                <div className={style.leftSide}>
                    <div className={style.side}>
                        {arr.map((item, index) => {
                            const position = index + 33;
                            return <SeatFigure key={position} number={position} available={isAvailable(position)} position />;
                        })}
                    </div>
                    <div className={style.side}>
                        {arr.map((item, index) => {
                            const position = index + 49;
                            return <SeatFigure key={position} number={position} available={isAvailable(position)} position />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coach;
