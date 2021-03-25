import React from 'react';
import clsx from 'clsx';

import './tab.css';

export const Tab: React.FC<{
    type?: 'current' | 'default';
    text: string;
    handleClick?: () => void;
}> = ({ type, text, handleClick }) => {
    const className = clsx('tab', {
        [`tab_type_${type}`]: type,
    });

    return (
        <div className={`${className} pt-2 pr-5 pb-2 pl-5`} onClick={handleClick}>
            <span className="text text_type_main-default">{text}</span>
        </div>
    );
};
