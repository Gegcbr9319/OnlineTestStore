import React from 'react';
import styles from './Cart.module.scss';
import { useSelector } from 'react-redux';
import { CartInfo } from '../../components';
import { useFormik } from 'formik';

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

export const Cart = () => {
    const cartData = useSelector(
        (state: { cartDataState: { cartData: IData[] } }) => state.cartDataState.cartData
    );

    const cartPrice = cartData
        .reduce(
            (accumulator, currentValue) =>
                accumulator + currentValue.count * currentValue.regular_price.value,
            0
        )
        .toFixed(2);

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <div>
                {cartData.map((item) => {
                    return <CartInfo {...item} key={item.id} />;
                })}
                {cartData.length > 0 && <p>Total price {cartPrice} USD</p>}
            </div>

            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    placeholder="Enter Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <label htmlFor="phone">Phone</label>
                <input
                    id="phone"
                    name="phone"
                    placeholder="Enter Phone"
                    type="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                />
                <button
                    type="submit"
                    disabled={Boolean(!formik.values.name || !formik.values.phone)}
                >
                    Make Order
                </button>
            </form>
        </div>
    );
};
