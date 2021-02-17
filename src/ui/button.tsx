import React from 'react';
import './button.css';

export const Button: React.FC<{
    type?: 'secondary' | 'primary';
    size?: 'small' | 'medium' | 'large';
}> = ({ children, type = 'primary', size = 'medium' }) => {
    const className = `button ${
        type === 'primary' ? 'button_type_primary' : 'button_type_secondary'
    } ${
        size === 'medium'
            ? 'button_size_medium'
            : size === 'small'
            ? 'button_size_small'
            : 'button_size_large'
    }`;

    return <button className={className}>{children}</button>;
};
