import SearchPage from '@/Pages/SearchPage';
import Booking from '@/Pages/Booking';
import ErrorPage from '@/Pages/ErrorPage';
import Payment from '@/Pages/Payment';
import ConfirmPayment from '@/Pages/ConfirmPayment';
import { createBrowserRouter } from 'react-router-dom';
import BookingInfo from '@/Pages/BookingInfo';
import ForgotBookingCode from '@/Pages/ForgotBookingCode';
import ReturnTicket from '@/Pages/ReturnTicket';
import TermCondition from '@/Pages/TermCondition';
import Contact from '@/Pages/Contact';
import Home from '@/Pages/Home';
import FAQs from '@/Pages/FAQs';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <Home />,
    },
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
        path: '/booking-info',
        errorElement: <ErrorPage />,
        element: <BookingInfo />,
    },
    {
        path: '/return-ticket',
        errorElement: <ErrorPage />,
        element: <ReturnTicket />,
    },
    {
        path: '/forgot-booking-code',
        errorElement: <ErrorPage />,
        element: <ForgotBookingCode />,
    },
    {
        path: '/term-condition',
        errorElement: <ErrorPage />,
        element: <TermCondition />,
    },
    {
        path: '/contact',
        errorElement: <ErrorPage />,
        element: <Contact />,
    },
    {
        path: '/faqs',
        errorElement: <ErrorPage />,
        element: <FAQs />,
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);

export default router;
