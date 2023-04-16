import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { Cart, Main } from '../../pages';
import { Header } from '../index';

import styles from './App.module.scss';

export function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/main" replace />} />
                <Route path="/main" element={<Main />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
