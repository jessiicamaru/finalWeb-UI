import style from '../style.module.css';
import SeatFigure from '@/Components/Train/SeatFigure';

// eslint-disable-next-line react/prop-types
const CoachSide = ({ isAvailable, step, horizonal, index }) => {
    let Index = index;
    const arr = Array.from({ length: 16 }, (_, i) => i + 1);

    return (
        <div className={style.side}>
            {arr.map((item, index) => {
                const position = index + step;
                return <SeatFigure index={Index} key={position} number={position} available={isAvailable(position)} position={horizonal} />;
            })}
        </div>
    );
};

export default CoachSide;
