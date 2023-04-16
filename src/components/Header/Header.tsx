import React from 'react';
import { NavLink } from 'react-router-dom';
import cart from '../../assets/img/cart.svg';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <NavLink to="/main">
                <h3>Test Online Store</h3>
            </NavLink>

            <NavLink to="/cart">
                <img className={styles.headerImg} src={cart}></img>
            </NavLink>
        </header>
    );
};
