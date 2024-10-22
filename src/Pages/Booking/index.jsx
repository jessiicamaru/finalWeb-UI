import DefaultLayout from '@/Layouts/DefaultLayout';

import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, memo } from 'react';

import Result from '@/Components/Result';
import CoachFigure from '@/Components/Train/CoachFigure';
import BareSeatFigure from '@/Components/Train/SeatFigure/BareSeatFigure';

const Booking = () => {
    const location = useLocation();
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    console.log(location);

    try {
        useEffect(() => {
            location.state.data && setData(location.state.data);
        }, [location.state.data]);
    } catch {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            navigate('/search');
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
    }

    return (
        <DefaultLayout>
            {data &&
                data.data.map((way, index) => {
                    return <Result key={index} data={way} index={index} />;
                })}

            <div className="w-full border-solid border-[1px] border-[#ddd] bg-white">
                <div className="flex justify-evenly">
                    <div className="flex gap-[10px] pt-[25px] cursor-auto pointer-events-none">
                        <CoachFigure data={{ coach: '' }} available />
                        <div>Toa còn vé</div>
                    </div>
                    <div className="flex gap-[10px] pt-[25px] cursor-auto pointer-events-none">
                        <CoachFigure data={{ coach: '' }} active available />
                        <div>Toa đang chọn</div>
                    </div>
                    <div className="flex gap-[10px] pt-[25px] cursor-auto pointer-events-none">
                        <CoachFigure data={{ coach: '' }} />
                        <div>Toa hết vé</div>
                    </div>
                </div>
                <div className="w-4/5 bg-[#ddd] h-[1px] ml-[10%] mr-[10%]"></div>
                <div className="flex justify-evenly pb-[25px]">
                    <div className="flex gap-[10px] pt-[25px]">
                        <div>
                            <BareSeatFigure available />
                        </div>
                        <div>Chỗ còn vé</div>
                    </div>
                    <div className="flex gap-[10px] pt-[25px]">
                        <div>
                            <BareSeatFigure available isActive />
                        </div>
                        <div>Chỗ đang chọn</div>
                    </div>
                    <div className="flex gap-[10px] pt-[25px]">
                        <div>
                            <BareSeatFigure />
                        </div>
                        <div>Chỗ hết vé</div>
                    </div>
                </div>
            </div>
            <div className="p-[25px] bg-white"></div>
        </DefaultLayout>
    );
};

export default memo(Booking);
