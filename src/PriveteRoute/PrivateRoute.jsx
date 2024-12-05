import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex mt-64 justify-center h-screen">
                <progress className="progress w-72"></progress>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return (
        <Navigate to={'/login'} state={{ from: location }} replace />
    );
};

export default PrivateRoute;