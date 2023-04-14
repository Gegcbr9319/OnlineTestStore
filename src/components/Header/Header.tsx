import React from 'react';
import cart from '../../assets/img/cart.svg';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header>
            <h3>Test Online Store</h3>
            <img className={styles.headerImg} src={cart}></img>
        </header>
    );
};
