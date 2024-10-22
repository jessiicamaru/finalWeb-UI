import SeatFigure from '@/Components/Train/SeatFigure';
import { useSelector } from 'react-redux';
import { departureRemainingSelectors, returnRemainingSelectors } from '@/redux/selectors';

// eslint-disable-next-line react/prop-types
const CoachSide = ({ isAvailable, step, horizonal, index }) => {
    let Index = index;
    const arr = Array.from({ length: 16 }, (_, i) => i + 1);
    const list = useSelector(index === 1 ? returnRemainingSelectors : departureRemainingSelectors);

    const isActive = (number) => {
        if (Array.isArray(list))
            return list.find((item) => {
                return item.seat == number;
            });
    };

    return (
        <div className="w-full h-[45%] flex flex-wrap items-center justify-between">
            {arr.map((item, index) => {
                const position = index + step;
                return (
                    <SeatFigure
                        index={Index}
                        key={position}
                        number={position}
                        available={isAvailable(position)}
                        position={horizonal}
                        isActive={isActive(position)}
                    />
                );
            })}
        </div>
    );
};

export default CoachSide;
