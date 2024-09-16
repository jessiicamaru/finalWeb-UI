import SearchPage from '@/Pages/SearchPage';
import Booking from '@/Pages/Booking';
import ErrorPage from '@/Pages/ErrorPage';

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
        path: '*',
        element: <ErrorPage />,
    },
]);

export default router;
