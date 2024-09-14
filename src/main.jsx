// eslint-disable-next-line no-unused-vars
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
// import SearchPage from './Pages/SearchPage';
createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <RouterProvider router={router} />
    // </StrictMode>
);
