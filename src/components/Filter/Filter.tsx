import React, { useCallback, useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import styles from './Filter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateProducts, resetProducts } from '../../assets/redux/productsSlice';
import productsJSON from '../../assets/data/products.json';

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
interface IFilter {
    value: number;
}

export const Filter = () => {
    const products = useSelector(
        (state: { productsState: { products: IProducts[] } }) => state.productsState.products
    );
    const [filterState, setFilterState] = useState<number[]>([]);
    const dispatch = useDispatch();
    const defaultValues = [1, 2, 3, 4, 5, 6, 7, 8];

    const filtration = useCallback(() => {
        if (filterState.length === 0) return;
        const filterProducts = [...JSON.parse(JSON.stringify(productsJSON))].filter((index) =>
            filterState.includes(index.id)
        );
        dispatch(updateProducts(filterProducts));
    }, [dispatch, filterState]);

    useEffect(() => {
        filtration();
    }, [filterState, filtration]);

    return (
        <>
            <Formik
                initialValues={{
                    checked: [],
                }}
                onSubmit={(values) => {
                    if (values.checked.length === 0) {
                        setFilterState(defaultValues);
                    } else {
                        const checkedValues = [];
                        for (let i = 0; i < values.checked.length; i++) {
                            checkedValues.push(Number(values.checked[i]));
                        }
                        setFilterState(checkedValues);
                    }
                }}
            >
                {({ values }) => (
                    <Form className={styles.form}>
                        <div id="checkbox-group">
                            <h3>Brands</h3>
                        </div>
                        <div role="group" aria-labelledby="checkbox-group">
                            <label className={styles.label}>
                                <Field type="checkbox" name="checked" value="1" />
                                Brand 1
                            </label>
                            <label className={styles.label}>
                                <Field type="checkbox" name="checked" value="2" />
                                Brand 2
                            </label>
                            <label className={styles.label}>
                                <Field type="checkbox" name="checked" value="3" />
                                Brand 3
                            </label>
                            <label className={styles.label}>
                                <Field type="checkbox" name="checked" value="4" />
                                Brand 4
                            </label>
                            <label className={styles.label}>
                                <Field type="checkbox" name="checked" value="5" />
                                Brand 5
                            </label>
                            <label className={styles.label}>
                                <Field type="checkbox" name="checked" value="6" />
                                Brand 6
                            </label>
                            <label className={styles.label}>
                                <Field type="checkbox" name="checked" value="7" />
                                Brand 7
                            </label>
                            <label className={styles.label}>
                                <Field type="checkbox" name="checked" value="8" />
                                Brand 8
                            </label>
                            <label className={styles.label}>
                                <Field type="checkbox" name="checked" value="9" />
                                Brand 9
                            </label>
                        </div>

                        <input type="submit" value="Apply" className={styles.button} />

                        <button
                            type="reset"
                            className={styles.reset}
                            onClick={() => dispatch(resetProducts())}
                        >
                            X Reset
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
};
