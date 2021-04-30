import React from 'react';
import { getIconColor, TIconProps } from './utils';

export const ArrowDownIcon = ({ type, onClick }: TIconProps) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={getIconColor(type)}
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.9541 15.6475C11.5164 16.1175 12.4836 16.1175 13.0459 15.6475L17.6243 11.8214C18.4585 11.1242 17.8129 10 16.5783 10H7.42166C6.1871 10 5.54152 11.1242 6.37574 11.8214L10.9541 15.6475Z"
                fill={getIconColor(type)}
            />
        </svg>
    );
};
