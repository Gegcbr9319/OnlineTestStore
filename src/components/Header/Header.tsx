import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import cart from '../../assets/img/cart.svg';
import styles from './Header.module.scss';

export const Header = () => {
    const cartNumber = useSelector(
        (state: { cartNumberState: { numberCart: number } }) => state.cartNumberState.numberCart
    );
    return (
        <header className={styles.header}>
            <NavLink to="/main">
                <h3>Test Online Store</h3>
            </NavLink>
            <div className={styles.cart}>
                <div className={styles.number}>
                    <p>{cartNumber}</p>
                </div>
                <NavLink to="/cart">
                    <img className={styles.headerImg} src={cart}></img>
                </NavLink>
            </div>
        </header>
    );
};
