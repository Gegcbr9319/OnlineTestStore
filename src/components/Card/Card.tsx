import React, { FC } from 'react';
import styles from './Card.module.scss';

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
}

export const Card: FC<IProducts> = ({
    image,

    title,

    brand,
    regular_price,
}) => {
    return (
        <div className={styles.card}>
            <h2> {title}</h2>
            <h3>brand: {brand}</h3>

            <img className={styles.image} src={`src/assets${image}`} alt={image} />
            <p>
                Price:{regular_price.value} {regular_price.currency}
            </p>
        </div>
    );
};
