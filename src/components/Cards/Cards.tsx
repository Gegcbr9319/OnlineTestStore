import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../index';
import styles from './Cards.module.scss';

interface IProducts {
    type: string;
    id: number;
    sku: string;
    title: string;
    regular_price: {
        currency: string;
        value: number;
    };
    image: string;
    brand: number;
}

export const Cards = () => {
    const products = useSelector(
        (state: { displayState: { display: IProducts[] } }) => state.displayState.display
    );

    return (
        <div className={styles.cards}>
            {products.map((item) => {
                return <Card {...item} key={item.id} />;
            })}
        </div>
    );
};
