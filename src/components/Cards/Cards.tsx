import React from 'react';
import { Card } from '../index';
import styles from './Cards/Cards.module.scss';

import products from '../../assets/data/products.json';

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
    color: string;
}

export const Cards = () => {
    return (
        <>
            {products.map((item) => {
                return <Card {...item} key={item.id} />;
            })}
        </>
    );
};
