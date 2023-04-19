import React, { useState } from 'react';
import styles from './Cart.module.scss';
import { useSelector } from 'react-redux';
import { CartInfo, Modal } from '../../components';
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
    const [answer, setAnswer] = useState(false);

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
            postData('https://app.aaccent.su/js/confirm.php', {
                info: JSON.stringify(values, null, 2),
                data: cartData,
            }).then((data) => {
                setAnswer(true);

                console.log(data);
            });
        },
    });

    const postData = async (url = '', data = {}) => {
        const response = await fetch(url, {
            method: 'POST',

            body: JSON.stringify(data),
        });
        return response.json();
    };

    return (
        <div className={styles.cart}>
            <div className={styles.cartInfo}>
                <div className={styles.cartCards}>
                    {cartData.map((item) => {
                        return <CartInfo {...item} key={item.id} />;
                    })}
                </div>
                <div className={styles.cartPrice}>
                    {cartData.length > 0 && <h4>Total price {cartPrice} USD</h4>}
                </div>
            </div>
            {cartData.length > 0 && (
                <form onSubmit={formik.handleSubmit} className={styles.cartForm}>
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
            )}
            {answer && <Modal />}
        </div>
    );
};
