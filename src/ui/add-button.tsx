import clsx from 'clsx';
import React, { SyntheticEvent } from 'react';
import './common-button.css';
import { PlusIcon } from './icons';

export const AddButton: React.FC<{
    onClick: (() => void) | ((e: SyntheticEvent) => void);
    text?: string;
    htmlType?: 'button' | 'submit' | 'reset';
    extraClass?: string;
}> = ({ onClick, text = 'Добавить', htmlType = 'button', extraClass = '' }) => {
    const className = clsx('common_button', extraClass);

    return (
        <button type={htmlType} className={className} onClick={onClick}>
            <PlusIcon type="primary" />
            {text}
        </button>
    );
};
