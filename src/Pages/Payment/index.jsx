import NonCartButtonLayout from '@/Layouts/NonCartButtonLayout';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
    const location = useLocation();

    useEffect(() => {
        location.state && console.log(location.state);
    }, [location.state]);

    return (
        <NonCartButtonLayout>
            <div></div>
        </NonCartButtonLayout>
    );
};

export default Payment;
