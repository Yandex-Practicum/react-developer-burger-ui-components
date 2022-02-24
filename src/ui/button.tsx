import React, { SyntheticEvent } from 'react';
import styles from './button.module.css';

interface Props extends Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'size'> {
    type?: 'secondary' | 'primary';
    size?: 'small' | 'medium' | 'large';
    onClick?: (() => void) | ((e: SyntheticEvent) => void);
    extraClass?: string;
    htmlType: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<Props> = ({
    children,
    type = 'primary',
    size = 'medium',
    onClick,
    htmlType,
    extraClass = '',
    ...rest
}) => {
    const className = `${styles.button} ${
        type === 'primary' ? styles.button_type_primary : styles.button_type_secondary
    } ${
        size === 'medium'
            ? styles.button_size_medium
            : size === 'small'
            ? styles.button_size_small
            : styles.button_size_large
    } ${extraClass}`;

    return (
        <button type={htmlType} onClick={onClick} className={className} {...rest}>
            {children}
        </button>
    );
};
