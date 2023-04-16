import React, { FormEvent } from 'react';
import styles from './Filter.module.scss';

export const Filter = () => {
    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit');
    };

    return (
        <>
            <form onSubmit={submit} className={styles.form}>
                <h2> Brands</h2>
                <label className={styles.label}>
                    Brand 1
                    <input type="checkbox" name="1" className={styles.checkbox} />
                </label>
                <label className={styles.label}>
                    Brand 2
                    <input type="checkbox" name="2" className={styles.checkbox} />
                </label>
                <label className={styles.label}>
                    Brand 3
                    <input type="checkbox" name="3" className={styles.checkbox} />
                </label>
                <label className={styles.label}>
                    Brand 4
                    <input type="checkbox" name="4" className={styles.checkbox} />
                </label>
                <label className={styles.label}>
                    Brand 5
                    <input type="checkbox" name="5" className={styles.checkbox} />
                </label>
                <label className={styles.label}>
                    Brand 6
                    <input type="checkbox" name="6" className={styles.checkbox} />
                </label>
                <label className={styles.label}>
                    Brand 7
                    <input type="checkbox" name="7" className={styles.checkbox} />
                </label>
                <label className={styles.label}>
                    Brand 8
                    <input type="checkbox" name="8" className={styles.checkbox} />
                </label>
                <label className={styles.label}>
                    Brand 9
                    <input type="checkbox" name="9" className={styles.checkbox} />
                </label>

                <input type="submit" value="Apply" className={styles.button} />
                <input type="button" value="X Reset" className={styles.reset} />
            </form>
        </>
    );
};
