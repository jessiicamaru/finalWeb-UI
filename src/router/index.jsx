import SearchPage from '@/Pages/SearchPage';
import Booking from '@/Pages/Booking';
import ErrorPage from '@/Pages/ErrorPage';
import Payment from '@/Pages/Payment';
import ConfirmPayment from '@/Pages/ConfirmPayment';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/search',
        errorElement: <ErrorPage />,
        element: <SearchPage />,
    },
    {
        path: '/search/booking',
        errorElement: <ErrorPage />,
        element: <Booking />,
    },
    {
        path: '/search/booking/payment',
        errorElement: <ErrorPage />,
        element: <Payment />,
    },
    {
        path: '/search/booking/payment/confirm-payment',
        errorElement: <ErrorPage />,
        element: <ConfirmPayment />,
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);

export default router;
