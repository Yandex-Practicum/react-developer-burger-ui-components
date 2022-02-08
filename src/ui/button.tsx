import React, { SyntheticEvent } from 'react';
import styles from './button.module.css';

export const Button: React.FC<{
    type?: 'secondary' | 'primary';
    size?: 'small' | 'medium' | 'large';
    onClick?: (() => void) | ((e: SyntheticEvent) => void);
    htmlType?: 'button' | 'submit' | 'reset';
    rest?: { [key: string]: string | number | boolean };
}> = ({ children, type = 'primary', size = 'medium', onClick, htmlType, ...rest }) => {
    const className = `${styles.button} ${
        type === 'primary' ? styles.button_type_primary : styles.button_type_secondary
    } ${
        size === 'medium'
            ? styles.button_size_medium
            : size === 'small'
            ? styles.button_size_small
            : styles.button_size_large
    }`;

    return (
        <button type={htmlType} onClick={onClick} className={className} {...rest}>
            {children}
        </button>
    );
};
