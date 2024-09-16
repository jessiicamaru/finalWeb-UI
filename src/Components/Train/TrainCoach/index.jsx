import Coach from '../Coach';
import CoachFigure from '../CoachFigure';

import { useState, memo } from 'react';

const fakeData = {
    name: 'SE8',
    coaches: [
        {
            coach: 0,
            available: false,
        },
        {
            coach: 1,
            available: true,
        },
        {
            coach: 2,
            available: false,
        },
        {
            coach: 3,
            available: true,
        },
        {
            coach: 4,
            available: false,
        },
        {
            coach: 5,
            available: true,
        },
        {
            coach: 6,
            available: false,
        },
    ],
};

const reverseData = fakeData.coaches.reverse();

const TrainCoach = () => {
    const [activeCoach, setActiveCoach] = useState(1);

    return (
        <div>
            {reverseData.map((item, index) => {
                if (item.coach != 0) {
                    return (
                        <span
                            key={index + item}
                            onClick={() => {
                                setActiveCoach(index);
                            }}
                        >
                            <CoachFigure data={item} active={activeCoach == index} />
                        </span>
                    );
                } else if (item.coach == 0) {
                    return (
                        <span
                            key={index + item}
                            onClick={() => {
                                setActiveCoach(index);
                            }}
                        >
                            <CoachFigure data={item} name={fakeData.name} active={activeCoach == index} />
                        </span>
                    );
                }
            })}

            <Coach />
        </div>
    );
};

export default memo(TrainCoach);
