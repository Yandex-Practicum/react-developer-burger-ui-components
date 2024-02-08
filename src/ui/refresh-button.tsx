import clsx from 'clsx';
import React, { FC, ButtonHTMLAttributes } from 'react';
import './common-button.css';
import { RefreshIcon } from './icons';

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text?: string;
    extraClass?: string;
};

export const RefreshButton: FC<TProps> = ({
    text = 'Обновить',
    type = 'button',
    extraClass,
    className,
    ...rest
}) => {
    const classNames = clsx('common_button', extraClass, className);

    return (
        <button type={type} className={classNames} {...rest}>
            <RefreshIcon type="primary" />
            {text}
        </button>
    );
};
