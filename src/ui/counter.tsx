import React from 'react';
import styles from './counter.module.css';

export const Counter: React.FC<{
    count: number;
    size?: 'default' | 'small';
}> = ({ count = 0, size = 'default' }: { count: number; size?: 'default' | 'small' }) => {
    const className = `${styles.counter} ${styles[size]}`;

    return (
        <div className={className}>
            <p className={styles.counter__num}>{count}</p>
        </div>
    );
};
