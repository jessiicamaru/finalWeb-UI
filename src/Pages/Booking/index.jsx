import DefaultLayout from '@/Layouts/DefaultLayout';
import style from './style.module.css';

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

            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.itemUp}>
                        <CoachFigure data={{ coach: '' }} available />
                        <div>Toa còn vé</div>
                    </div>
                    <div className={style.itemUp}>
                        <CoachFigure data={{ coach: '' }} active available />
                        <div>Toa đang chọn</div>
                    </div>
                    <div className={style.itemUp}>
                        <CoachFigure data={{ coach: '' }} />
                        <div>Toa hết vé</div>
                    </div>
                </div>
                <div className={style.divider}></div>
                <div
                    className={style.row}
                    style={{
                        paddingBottom: '25px',
                    }}
                >
                    <div className={style.item}>
                        <div>
                            <BareSeatFigure available />
                        </div>
                        <div>Chỗ còn vé</div>
                    </div>
                    <div className={style.item}>
                        <div>
                            <BareSeatFigure available isActive />
                        </div>
                        <div>Chỗ đang chọn</div>
                    </div>
                    <div className={style.item}>
                        <div>
                            <BareSeatFigure />
                        </div>
                        <div>Chỗ hết vé</div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    padding: '25px',
                    backgroundColor: 'white',
                }}
            ></div>
        </DefaultLayout>
    );
};

export default memo(Booking);
