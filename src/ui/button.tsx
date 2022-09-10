import clsx from 'clsx';
import React, { SyntheticEvent } from 'react';
import './button.css';

interface Props
    extends React.PropsWithChildren<Omit<React.HTMLProps<HTMLButtonElement>, 'type' | 'size'>> {
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
    const className = clsx(
        'button',
        {
            [`button_type_${type}`]: type,
        },
        {
            [`button_size_${size}`]: size,
        },
        extraClass
    );

    return (
        <button type={htmlType} onClick={onClick} className={className} {...rest}>
            {children}
        </button>
    );
};
