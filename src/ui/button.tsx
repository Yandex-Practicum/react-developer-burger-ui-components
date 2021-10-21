import React, { SyntheticEvent } from 'react';
import styles from './button.module.css';

export const Button: React.FC<{
    type?: 'secondary' | 'primary';
    size?: 'small' | 'medium' | 'large';
    onClick?: (() => void) | ((e: SyntheticEvent) => void);
    disabled?: boolean;
    name?: string;
    htmlType?: 'button' | 'submit' | 'reset';
}> = ({
    children,
    type = 'primary',
    size = 'medium',
    onClick,
    disabled = false,
    name,
    htmlType,
}) => {
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
        <button
            type={htmlType}
            disabled={disabled}
            name={name}
            onClick={onClick}
            className={className}
        >
            {children}
        </button>
    );
};
