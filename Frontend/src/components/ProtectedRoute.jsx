import { Navigate, Outlet } from 'react-router-dom';
import { userAuth } from '../hooks/useAuth';

export default function ProtectedRoute() {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}