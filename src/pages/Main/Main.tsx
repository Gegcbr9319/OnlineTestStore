import React, { useCallback, useEffect, useState } from 'react';
import styles from './Main.module.scss';
import { Cards, Filter } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { updateDisplay } from '../../assets/redux/displaySlice';

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

export const Main = () => {
    const products = useSelector(
        (state: { productsState: { products: IProducts[] } }) => state.productsState.products
    );
    const dispatch = useDispatch();
    const [curentPage, setcurrentPage] = useState(0);
    const cardsForPage = 6;

    const pagination = useCallback(() => {
        dispatch(
            updateDisplay(
                products.slice(curentPage * cardsForPage, curentPage * cardsForPage + cardsForPage)
            )
        );
    }, [curentPage, dispatch, products]);

    useEffect(() => {
        pagination();
    }, [curentPage, pagination]);
    return (
        <div className={styles.main}>
            <div className={styles.mainCenter}>
                <Filter />
                <Cards />
            </div>
            <div className={styles.buttonsPage}>
                <button
                    onClick={() => setcurrentPage((prevState) => prevState - 1)}
                    disabled={curentPage === 0 || products.length === 0}
                >
                    Prev Page
                </button>
                {curentPage + 1}
                <button
                    onClick={() => setcurrentPage((prevState) => prevState + 1)}
                    disabled={
                        curentPage === Math.ceil(products.length / cardsForPage) - 1 ||
                        products.length === 0
                    }
                >
                    Next Page
                </button>
            </div>
        </div>
    );
};
