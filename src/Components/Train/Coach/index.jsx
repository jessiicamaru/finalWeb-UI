import style from './style.module.css';
import SeatFigure from '../SeatFigure';

const Coach = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    return (
        <div className="w100-dp_block">
            <h2 className={style.title}>Coach number 1</h2>

            <div className={style.container}>
                <div className={style.leftSide}>
                    <div className={style.side}>
                        {arr.map((item, index) => {
                            return <SeatFigure key={item + index} number={index + 1} />;
                        })}
                    </div>
                    <div className={style.isle}></div>
                    <div className={style.side}>
                        {arr.map((item, index) => {
                            return <SeatFigure key={item + index} number={index + 17} />;
                        })}
                    </div>
                </div>
                <div className={style.boundary}>
                    <div className={style.table}></div>
                    <div className={style.table}></div>
                </div>

                <div className={style.rightSide}>
                    <div className={style.side}>
                        {arr.map((item, index) => {
                            return <SeatFigure key={item + index} position number={index + 33} />;
                        })}
                    </div>
                    <div className={style.isle}></div>
                    <div className={style.side}>
                        {arr.map((item, index) => {
                            return <SeatFigure key={item + index} position number={index + 49} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coach;
