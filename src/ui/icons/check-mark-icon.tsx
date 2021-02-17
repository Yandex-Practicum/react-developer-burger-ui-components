import React from 'react';
import { getIconColor, TIconProps } from './utils';

export const CheckMarkIcon = ({ type }: TIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={getIconColor(type)}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.6561 5.29793C22.1 5.7086 22.1163 6.39029 21.6926 6.82051L10.026 18.6667C9.8136 18.8823 9.51854 19.003 9.211 18.9999C8.90347 18.9969 8.61098 18.8705 8.40317 18.6508L2.29206 12.1892C1.8774 11.7508 1.90796 11.0696 2.36031 10.6677C2.81267 10.2658 3.51552 10.2954 3.93018 10.7338L9.23865 16.3467L20.0852 5.33334C20.5089 4.90311 21.2122 4.88725 21.6561 5.29793Z"
            />
        </svg>
    );
};
