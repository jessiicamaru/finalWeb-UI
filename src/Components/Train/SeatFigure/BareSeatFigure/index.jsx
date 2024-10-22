import clsx from 'clsx';

// eslint-disable-next-line react/prop-types
const BareSeatFigure = ({ position, available, number, isActive }) => {
    return (
        <div className="w-[40px] float-left min-h-[1px] h-[35px] px-[2px] leading-[30px] pointer-events-none">
            <div
                className="h-[35px] leading-[30px] flex"
                style={{
                    flexDirection: position ? 'row' : 'row-reverse',
                }}
            >
                <div
                    className={clsx(
                        'w-[84%] float-left min-h-[1px] h-full p-[2px] pr-[0px] rounded-[7px] text-center border-solid border-[1px] border-[#0000004d]',
                        {
                            ['white-available text-black cursor-pointer']: available,
                            ['unavailable text-white pointer-events-none']: !available,
                            ['active text-white cursor-pointer']: isActive && available,
                        }
                    )}
                >
                    {number}
                </div>
                <div className="leading-[30px] h-full bg-[#948a54] rounded-[3px] w-[10px]"></div>
            </div>
        </div>
    );
};

export default BareSeatFigure;
