import CoachFigure from '../CoachFigure';

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
    console.log(fakeData);

    return (
        <div>
            {reverseData.map((item, index) => {
                if (item.coach != 0) {
                    return <CoachFigure key={index + item} data={item} />;
                } else if (item.coach == 0) {
                    return <CoachFigure key={index + item} data={item} name={fakeData.name} />;
                }
            })}
        </div>
    );
};

export default TrainCoach;
