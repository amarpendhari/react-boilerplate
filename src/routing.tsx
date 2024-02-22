import React, { useEffect } from 'react';
import { Navigate, Route as ReactRoute, Outlet } from 'react-router-dom';

import { CONSTANTS } from './configs/index'
import { getItem } from './utils/localstorage';

const Route = ({ children, ...rest }: any) => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [rest.location.pathname]);
    return (<ReactRoute {...rest}>{children}</ReactRoute>);
};

const PublicRoute = ({ children, ...rest }: any) => {
    if (getItem(CONSTANTS.STORAGE_KEYS.TOKEN)) {
        return (<Navigate to="/dashboard" />);
    }
    return (children);
};

const PrivateRoute = ({ children, ...rest }: any) => {
    if (!getItem(CONSTANTS.STORAGE_KEYS.TOKEN)) {
        return (<Navigate to="/login" />);
    }
    return (children);
};

export { Route, PrivateRoute, PublicRoute };