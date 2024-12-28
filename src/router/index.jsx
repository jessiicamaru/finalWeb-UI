import SearchPage from '@/Pages/SearchPage';
import Booking from '@/Pages/Booking';
import ErrorPage from '@/Pages/ErrorPage';
import Payment from '@/Pages/Payment';
import ConfirmPayment from '@/Pages/ConfirmPayment';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import BookingInfo from '@/Pages/BookingInfo';
import ForgotBookingCode from '@/Pages/ForgotBookingCode';
import ReturnTicket from '@/Pages/ReturnTicket';
import TermCondition from '@/Pages/TermCondition';
import Contact from '@/Pages/Contact';
import Home from '@/Pages/Home';
import FAQs from '@/Pages/FAQs';
import Login from '@/Pages/Login';
import AuthProvider from '@/context/AuthProvider';
import ProtectedRoute from './ProtectRoute';

// eslint-disable-next-line react-refresh/only-export-components
const AuthLayout = () => {
    return (
        <AuthProvider>
            <Outlet />
        </AuthProvider>
    );
};

const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                element: <ProtectedRoute />,
                children: [
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
                        path: '/return-ticket',
                        errorElement: <ErrorPage />,
                        element: <ReturnTicket />,
                    },
                ],
            },
            {
                path: '/',
                errorElement: <ErrorPage />,
                element: <Home />,
            },
            {
                path: '/booking-info',
                errorElement: <ErrorPage />,
                element: <BookingInfo />,
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
                path: '/login',
                errorElement: <ErrorPage />,
                element: <Login />,
            },
        ],
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);

export default router;
