import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../../assets/redux/cartDataSlice';
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
    count: number;
}

export const Card: FC<IProducts> = ({ id, image, title, brand, regular_price }) => {
    const dispatch = useDispatch();
    const [path, setPath] = useState(`../../assets${image}`);
    const cartData = useSelector(
        (state: { cartDataState: { cartData: IData[] } }) => state.cartDataState.cartData
    );

    /*   const imgImport = async () => {
        const module = await import(`../../assets${image}`);
        setPath(module);
        return module;
    }; */
    const cardInfo: IData = {
        id: id,
        title: title,
        brand: brand,
        regular_price: regular_price,
        count: 1,
    };

    const addInfoCart = () => {
        dispatch(updateData(cardInfo));
    };

    /*  useEffect(() => {
        imgImport();
    }, []); */
    return (
        <div className={styles.card}>
            <h2> {title}</h2>
            <h3>brand: {brand}</h3>

            <img className={styles.image} src={path} alt={image} />
            <p>
                Price:{regular_price.value} {regular_price.currency}
            </p>
            <button
                className={styles.button}
                onClick={addInfoCart}
                disabled={cartData.filter((item) => item.id === id).length === 1}
            >
                Add to cart
            </button>
        </div>
    );
};
