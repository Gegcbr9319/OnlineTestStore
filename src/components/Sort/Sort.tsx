import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProducts } from '../../assets/redux/productsSlice';
import styles from './Sort.module.scss';

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

export const Sort = () => {
    const [sortValue, setSortValue] = useState('');
    const dispatch = useDispatch();
    const products = useSelector(
        (state: { productsState: { products: IProducts[] } }) => state.productsState.products
    );

    const sorting = useCallback(() => {
        const sortProduct = [...JSON.parse(JSON.stringify(products))];
        if (sortValue.length === 0) {
            return;
        }
        if (sortValue === 'descending') {
            dispatch(
                updateProducts(
                    sortProduct.sort((a, b) => a.regular_price.value - b.regular_price.value)
                )
            );
        } else {
            dispatch(
                updateProducts(
                    sortProduct.sort((a, b) => b.regular_price.value - a.regular_price.value)
                )
            );
        }
    }, [dispatch, products, sortValue]);

    useEffect(() => {
        sorting();
    }, [sortValue]);

    return (
        <div className={styles.sort}>
            <h3>Sort</h3>
            <select
                onChange={(e) => {
                    setSortValue(e.target.value);
                }}
            >
                <option value="descending">Descending order</option>
                <option value="ascending"> Ascending</option>
            </select>
        </div>
    );
};
