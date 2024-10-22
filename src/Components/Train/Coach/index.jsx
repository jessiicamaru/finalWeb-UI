/* eslint-disable react/prop-types */
import CoachSide from './CoachSide';

const Coach = ({ data, coach, index }) => {
    const bookedSeats = data.map((seat) => seat.Position);
    const isAvailable = (position) => !bookedSeats.includes(position);

    return (
        <div className="w-full block">
            <h2 className="m-[12px] text-center w-full">Coach number {coach}</h2>

            <div className="px-6 py-3 border-solid border-[3px] border-[#385d8a] rounded-[20px] mx-auto w-[95%] h-full flex justify-between">
                <div className="w-[45%] h-full flex flex-wrap gap-[30px]">
                    <CoachSide index={index} isAvailable={isAvailable} step={1} />
                    <CoachSide index={index} isAvailable={isAvailable} step={17} />
                </div>
                <div className="w-[10%] flex flex-col items-center justify-between">
                    <div className="w-1/2 bg-[#888] h-[45%] rounded-[10px]"></div>
                    <div className="w-1/2 bg-[#888] h-[45%] rounded-[10px]"></div>
                </div>

                <div className="w-[45%] h-full flex flex-wrap gap-[30px]">
                    <CoachSide index={index} isAvailable={isAvailable} step={33} horizonal />
                    <CoachSide index={index} isAvailable={isAvailable} step={49} horizonal />
                </div>
            </div>
        </div>
    );
};

export default Coach;
