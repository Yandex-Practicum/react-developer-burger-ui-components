import React from 'react';
import { getIconColor, TIconProps } from './utils';

export const BurgerIcon = ({ type }: TIconProps) => {
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
                d="M22.0571 8.7H1.96905C1.44524 8.7 1.02619 8.25842 1 7.70645C1 3.26308 4.69286 1 12 1C19.3071 1 23 3.26308 23 7.70645C23 8.25842 22.581 8.7 22.0571 8.7ZM24 12.55C24 11.6362 23.2674 10.9 22.3579 10.9H1.64211C0.732632 10.9 0 11.6362 0 12.55C0 13.4638 0.732632 14.2 1.64211 14.2H22.3579C23.2674 14.2 24 13.4638 24 12.55ZM22.0321 16.4H1.94174C1.41855 16.4 1 16.8693 1 17.456V18.5707C1 21.0053 2.77883 23 4.95006 23H19.0499C21.2212 23 23 21.0053 23 18.5707V17.456C22.9738 16.8693 22.5553 16.4 22.0321 16.4Z"
            />
        </svg>
    );
};
