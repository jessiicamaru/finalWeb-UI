import DefaultLayout from '@/Layouts/DefaultLayout';
// import style from './style.module.css';

import { useLocation } from 'react-router-dom';
import { useEffect, useState, memo } from 'react';

import Result from '@/Components/Result';

const Booking = () => {
    const location = useLocation();
    const [data, setData] = useState(null);
    console.log('location', location.state.data);

    useEffect(() => {
        location.state.data && setData(location.state.data);
    }, [location.state.data]);

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
