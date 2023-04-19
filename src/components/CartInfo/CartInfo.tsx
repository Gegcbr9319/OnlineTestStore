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
        <div>
            <h3>{title}</h3>
            <h4>{brand}</h4>
            <h4>
                {price.toFixed(2)}
                {regular_price.currency}
            </h4>
            <div>
                <button onClick={deleteInfo} disabled={count === 1}>
                    -
                </button>
                {count}
                <button onClick={addInfo}>+</button>
            </div>
            <button onClick={deleteCart}>Delete from cart</button>
        </div>
    );
};
