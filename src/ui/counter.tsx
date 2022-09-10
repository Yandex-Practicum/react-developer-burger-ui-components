import clsx from 'clsx';
import React from 'react';
import './counter.css';

export const Counter: React.FC<{
    count: number;
    size?: 'default' | 'small';
    extraClass?: string;
}> = ({ count = 0, size = 'default', extraClass = '' }) => {
    const className = clsx(
        'counter',
        {
            [size]: size,
        },
        extraClass
    );

    return (
        <div className={className}>
            <p className="counter__num">{count}</p>
        </div>
    );
};
