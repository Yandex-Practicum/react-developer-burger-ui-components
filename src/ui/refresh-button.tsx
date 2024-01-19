import clsx from 'clsx';
import React, { SyntheticEvent } from 'react';
import './common-button.css';
import { RefreshIcon } from './icons';

export const RefreshButton: React.FC<{
    onClick: (() => void) | ((e: SyntheticEvent) => void);
    text?: string;
    htmlType?: 'button' | 'submit' | 'reset';
    extraClass?: string;
}> = ({ onClick, text = 'Обновить', htmlType = 'button', extraClass = '' }) => {
    const className = clsx('common_button', extraClass);

    return (
        <button type={htmlType} className={className} onClick={onClick}>
            <RefreshIcon type="primary" />
            {text}
        </button>
    );
};
