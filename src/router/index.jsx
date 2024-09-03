import SearchPage from '../Pages/SearchPage';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <SearchPage />,
        children: [
            {
                element: <></>,
            },
        ],
    },
]);

export default router;
