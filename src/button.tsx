import * as React from 'react';
import styles from './button.module.css';

export const Button: React.FC<{
    type?: 'secondary' | 'primary';
    size?: 'small' | 'medium' | 'large';
}> = ({ children, type = 'primary', size = 'medium' }) => {
    const className = `${styles.button} ${
        type === 'primary' ? styles.button_type_primary : styles.button_type_secondary
    } ${
        size === 'medium'
            ? styles.button_size_medium
            : size === 'small'
            ? styles.button_size_small
            : styles.button_size_large
    }`;

    return <button className={className}>{children}</button>;
};
