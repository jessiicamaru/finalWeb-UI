import DefaultLayout from '@/Layouts/DefaultLayout';
// import style from './style.module.css';

import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, memo } from 'react';

import Result from '@/Components/Result';
import { useSelector } from 'react-redux';

const Booking = () => {
    const location = useLocation();
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    // const value = useSelector((state) => state.train);

    // console.log(value);

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
        </DefaultLayout>
    );
};

export default memo(Booking);
