// eslint-disable-next-line no-unused-vars
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Provider } from 'react-redux';
import store from './redux/store';
import './config/firebase';
createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
    // </StrictMode>
);
