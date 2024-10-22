import clsx from 'clsx';

// eslint-disable-next-line react/prop-types
const CoachFigure = ({ data, name = '', active, available }) => {
    // eslint-disable-next-line react/prop-types
    let { coach } = data;
    if (coach === 0) {
        return (
            <div
                className={clsx('w-[50px] h-[50px] min-h-[1px] cursor-pointer inline-block text-center', {
                    ['mouseEventNone']: !available,
                })}
            >
                <div className="mt-0 mx-[1px] mb-[10px] rounded-[15%] h-[18px] overflow-visible">
                    <img className="w-full" src="/Train/head.png" alt="head" />
                </div>
                <div>{name}</div>
            </div>
        );
    } else {
        return (
            <div
                className={clsx('w-[50px] h-[50px] min-h-[1px] cursor-pointer inline-block text-center', {
                    ['mouseEventNone']: !available,
                })}
            >
                <div
                    className={clsx('mt-0 mx-[1px] mb-[10px] rounded-[15%] h-[18px] overflow-visible', {
                        ['available']: available,
                        ['unavailable']: !available,
                        ['active']: active,
                    })}
                >
                    <img className="w-full" src="/Train/train.png" alt="head" />
                </div>
                <div>{coach}</div>
            </div>
        );
    }
};

export default CoachFigure;
