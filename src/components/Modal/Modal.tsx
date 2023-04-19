import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetData } from '../../assets/redux/cartDataSlice';
import styles from './Modal.module.scss';

export const Modal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const reset = () => {
        dispatch(resetData());
        navigate('/main');
    };
    return (
        <div className={styles.modal}>
            <div className={styles.modalInfo}>
                <h3> Your order has been placed </h3>

                <button onClick={reset}> Ok</button>
            </div>
        </div>
    );
};
