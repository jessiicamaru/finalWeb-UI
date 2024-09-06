import SearchPage from '../Pages/SearchPage';
import Booking from '../Pages/Booking';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <SearchPage />,
    },
    {
        path: '/booking',
        element: <Booking />,
    },
]);

export default router;
