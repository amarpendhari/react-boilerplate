import React, { useEffect, useState } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import { PrivateRoute, PublicRoute } from './routing';
import { getItem } from './utils/localstorage';
import { CONSTANTS } from './configs';

// PreLogin
import Login from './pages/preLogin/login';
import Register from './pages/preLogin/register';

// PostLogin
import Dashboard from './pages/dashboard';
import UsersPage from './pages/users';
import AssetsPage from './pages/assets';
import TransactionsPage from './pages/transactions';

const App = () => {
    const [token, setToken] = useState(null)

    useEffect(() => {
        if(getItem(CONSTANTS.STORAGE_KEYS.TOKEN)) {
            setToken(getItem(CONSTANTS.STORAGE_KEYS.TOKEN))
        }
    })

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>

                    {/* public routes */}

                    <Route path="/" element={<PublicRoute> <Login /> </PublicRoute>} />
                    <Route path="/login" element={<PublicRoute> <Login /> </PublicRoute>} />
                    <Route path="/register" element={<PublicRoute> <Register /> </PublicRoute>} />

                    {/* private routes */}
                    <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
                    <Route path="/users" element={<PrivateRoute> <UsersPage /> </PrivateRoute>} />
                    <Route path="/assets" element={<PrivateRoute> <AssetsPage /> </PrivateRoute>} />
                    <Route path="/transactions" element={<PrivateRoute> <TransactionsPage /> </PrivateRoute>} />
                    
                    {/* page not found */}
                    <Route path="*" element={<div>Page not found</div>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
