import React from 'react';
import { getIconColor, TIconProps } from './utils';

export const ProfileIcon = ({ type }: TIconProps) => {
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
                d="M17.068 6.56875C17.068 10.0837 14.8959 13.1 12 13.1C9.10401 13.1 6.93203 10.0837 6.93203 6.56875C6.93203 3.05385 8.80118 1 12 1C15.1988 1 17.068 3.05385 17.068 6.56875ZM3.10524 20.9572C3.53926 21.4607 5.40556 23 12 23C18.5944 23 20.4608 21.4607 20.8947 20.9572C20.9792 20.8593 21.0103 20.7362 20.9971 20.6088C20.8969 19.638 20.0015 15.3 12 15.3C3.99848 15.3 3.10311 19.638 3.00291 20.6088C2.98975 20.7362 3.02077 20.8593 3.10524 20.9572Z"
            />
        </svg>
    );
};
