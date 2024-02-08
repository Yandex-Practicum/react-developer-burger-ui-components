import React, { FC } from 'react';
import { getIconColor, TIconProps } from './utils';

export const MenuIcon: FC<TIconProps> = ({ type, className, onClick }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill={getIconColor(type)}
            onClick={onClick}
            className={className}
        >
            <rect x="3" y="6" width="18" height="2" rx="1" fill={getIconColor(type)} />
            <rect x="3" y="11" width="18" height="2" rx="1" fill={getIconColor(type)} />
            <rect x="3" y="16" width="18" height="2" rx="1" fill={getIconColor(type)} />
        </svg>
    );
};
