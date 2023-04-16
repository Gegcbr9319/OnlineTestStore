import React from 'react';
import styles from './Main.module.scss';
import { Cards, Filter } from '../../components';

export const Main = () => {
    return (
        <>
            <Filter />
            <Cards />
        </>
    );
};
