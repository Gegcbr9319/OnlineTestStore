import React, { FC } from 'react';
import styles from './Card/Card.module.scss';

interface IProducts {
    type?: string;
    id?: number;
    sku?: string;
    title: string;
    regular_price: {
        currency: string;
        value: number;
    };
    image: string;
    brand: number;
    color: string;
}

export const Card: FC<IProducts> = ({
    image,

    title,
    color,
    brand,
    regular_price,
}) => {
    return (
        <div>
            <h2> {title}</h2>
            <h3>brand: {brand}</h3>
            <p> Collor: {color}</p>
            <img src={`src/assets${image}`} alt={image} />
            <p>
                price:{regular_price.value} {regular_price.currency}
            </p>
        </div>
    );
};
