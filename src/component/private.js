// components/private.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './authcontext'; // Adjust path if needed

const PrivateRoute = () => {
  const { user } = useAuth();

  if (user === undefined) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
