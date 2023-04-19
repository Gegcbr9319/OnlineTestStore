import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import cart from '../../assets/img/cart.svg';
import styles from './Header.module.scss';

interface IData {
    id: number;
    title: string;
    regular_price: {
        currency: string;
        value: number;
    };
    brand: number;
    count: number;
}

export const Header = () => {
    const cartData = useSelector(
        (state: { cartDataState: { cartData: IData[] } }) => state.cartDataState.cartData
    );
    const cartNumber = cartData.reduce(
        (accumulator, currentValue) => accumulator + currentValue.count,
        0
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
