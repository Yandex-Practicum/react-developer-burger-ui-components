import React, { FC } from 'react';
import { TIconProps } from './utils';

export const PlusIcon: FC<TIconProps> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1.68619C12.5523 1.68619 13 2.1339 13 2.68619L13 10.9999L21.3137 10.9999C21.866 10.9999 22.3137 11.4476 22.3137 11.9999C22.3137 12.5522 21.866 12.9999 21.3137 12.9999L13 12.9999L13 21.3136C13 21.8659 12.5523 22.3136 12 22.3136C11.4477 22.3136 11 21.8659 11 21.3136L11 12.9999L2.68629 12.9999C2.13401 12.9999 1.68629 12.5522 1.68629 11.9999C1.68629 11.4476 2.13401 10.9999 2.68629 10.9999L11 10.9999L11 2.68619C11 2.1339 11.4477 1.68619 12 1.68619Z"
                fill="#F2F2F3"
            />
        </svg>
    );
};
