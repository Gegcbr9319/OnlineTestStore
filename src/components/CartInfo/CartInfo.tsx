import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCount, deleteCount, deleteFromCart } from '../../assets/redux/cartDataSlice';
import styles from './CartInfo.module.scss';

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

export const CartInfo: FC<IData> = ({ id, title, brand, regular_price, count }) => {
    const [price, setPrice] = useState(regular_price.value);
    const dispatch = useDispatch();

    const value: number = regular_price.value;

    const addInfo = () => {
        dispatch(addCount(id));
        setPrice(price + value);
    };

    const deleteInfo = () => {
        dispatch(deleteCount(id));
        setPrice(price - value);
    };

    const deleteCart = () => {
        dispatch(deleteFromCart(id));
    };

    return (
        <div className={styles.cartInfo}>
            <h3>{title}</h3>
            <h4>Brand: {brand}</h4>
            <h4>
                Price:
                {price.toFixed(2)}
                {regular_price.currency}
            </h4>
            <div className={styles.buttons}>
                <h4>value:</h4>
                <button onClick={deleteInfo} disabled={count === 1} className={styles.button}>
                    -
                </button>
                {count}
                <button onClick={addInfo} className={styles.button}>
                    +
                </button>
            </div>
            <button onClick={deleteCart} className={styles.buttonDelete}>
                Delete from cart
            </button>
        </div>
    );
};
