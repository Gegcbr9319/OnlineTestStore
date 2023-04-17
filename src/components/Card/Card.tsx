import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Card.module.scss';

interface IProducts {
    type?: string;
    id: number;
    sku?: string;
    title: string;
    regular_price: {
        currency: string;
        value: number;
    };
    image: string;
    brand: number;
}
interface IData {
    id: number;
    title: string;
    regular_price: {
        currency: string;
        value: number;
    };
    brand: number;
}

export const Card: FC<IProducts> = ({ id, image, title, brand, regular_price }) => {
    const dispatch = useDispatch();
    const cartData = useSelector(
        (state: { cartDataState: { cartData: IData } }) => state.cartDataState.cartData
    );

    const cardInfo: IData = { id: id, title: title, brand: brand, regular_price: regular_price };
    return (
        <div className={styles.card}>
            <h2> {title}</h2>
            <h3>brand: {brand}</h3>

            <img className={styles.image} src={`src/assets${image}`} alt={image} />
            <p>
                Price:{regular_price.value} {regular_price.currency}
            </p>
            <button className={styles.button}>Add to cart</button>
        </div>
    );
};
