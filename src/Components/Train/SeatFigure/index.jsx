import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import trainSlice from '@/utils/trainSlice';
import { checkCost } from '@/utils/checkCost';

// eslint-disable-next-line react/prop-types
const SeatFigure = ({ position, available, number, index, isActive }) => {
    const dispatch = useDispatch();
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];

    const handleClick = () => {
        if (!isActive) {
            dispatch(
                trainSlice.actions.addTicket({
                    payload: {
                        id: uuidv4(),
                        seat: number,
                        cost: checkCost(number),
                    },
                    type: index == 0 ? 'departure' : 'return',
                })
            );
        }
        if (isActive) {
            dispatch(
                trainSlice.actions.removeTicket({
                    payload: {
                        seat: number,
                        bookingDate: formattedDate,
                        cost: checkCost(number),
                    },
                    type: index == 0 ? 'departure' : 'return',
                })
            );
        }
    };

    return (
        <div
            className={clsx('w-[12.5%] float-left m-h-[1px] h-[35px] px-[2px] leading-[30px]', {
                ['mouseEventNone']: !available,
            })}
            onClick={available && handleClick}
        >
            <div
                className="h-[35px] leading-[30px] flex"
                style={{
                    flexDirection: position ? 'row' : 'row-reverse',
                }}
            >
                <div
                    className={clsx(
                        'w-[84%] float-left min-h-[1px] h-full p-[2px] pr-[0px] rounded-[7px] text-center border-solid border-[1px] border-[#0000004d] max-[640px]:text-[12px]',
                        {
                            ['white-available text-black cursor-pointer']: available,
                            ['unavailable text-white pointer-events-none']: !available,
                            ['active text-white cursor-pointer']: isActive && available,
                        }
                    )}
                >
                    {number}
                </div>
                <div className="leading-[30px] h-full bg-[#948a54] rounded-[3px] w-[10px] md:w-[3.59px]"></div>
            </div>
        </div>
    );
};

export default SeatFigure;
