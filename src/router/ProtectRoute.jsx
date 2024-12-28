import { Outlet, Navigate } from 'react-router-dom';

export default function ProtectedRoute() {
    if (!localStorage.getItem('access_token_rt')) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}
