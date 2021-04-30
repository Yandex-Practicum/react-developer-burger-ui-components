import React from 'react';
import { getIconColor, TIconProps } from './utils';

export const ArrowUpIcon = ({ type, onClick }: TIconProps) => {
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
                d="M10.9541 10.3525C11.5164 9.88251 12.4836 9.88251 13.0459 10.3525L17.6243 14.1786C18.4585 14.8758 17.8129 16 16.5783 16H7.42166C6.1871 16 5.54152 14.8758 6.37574 14.1786L10.9541 10.3525Z"
                fill={getIconColor(type)}
            />
        </svg>
    );
};
