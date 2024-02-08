import clsx from 'clsx';
import React, { FC, ButtonHTMLAttributes } from 'react';
import './common-button.css';
import { PlusIcon } from './icons';

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text?: string;
    extraClass?: string;
};

export const AddButton: FC<TProps> = ({
    text = 'Добавить',
    type = 'button',
    extraClass,
    className,
    ...rest
}) => {
    const classNames = clsx('common_button', extraClass, className);

    return (
        <button type={type} className={classNames} {...rest}>
            <PlusIcon type="primary" />
            {text}
        </button>
    );
};
