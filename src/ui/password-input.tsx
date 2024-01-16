import React, { useRef, useState } from 'react';
import { Input } from './input';

interface TPasswordInputInterface
    extends Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'type' | 'ref'> {
    value: string;
    placeholder?: string;
    size?: 'default' | 'small';
    icon?: 'HideIcon' | 'ShowIcon' | 'EditIcon';
    errorText?: string;
    checkValid?: (isValid: boolean) => void;
    extraClass?: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const PasswordInput: React.FC<TPasswordInputInterface> = ({
    value,
    placeholder = 'Пароль',
    errorText = 'Некорректный пароль',
    checkValid,
    onChange,
    size,
    icon = 'ShowIcon',
    extraClass = '',
    ...rest
}) => {
    const [visible, setVisible] = useState(false);
    const [currentIcon, setCurrentIcon] = useState<TPasswordInputInterface['icon']>(icon);
    const [fieldDisabled, setDisabled] = useState(icon === 'EditIcon');
    const [error, setError] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const onIconClick = () => {
        if (currentIcon === 'ShowIcon') {
            setVisible(true);
            setCurrentIcon('HideIcon');
        } else {
            setDisabled(false);
            setVisible(true);
        }
        setTimeout(() => inputRef.current?.focus(), 0);
    };

    const validateField = (value: string) => {
        setError(value.length < 6);
        checkValid?.(value.length >= 6);
    };

    const onFocus = () => {
        setError(false);
    };

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value) {
            validateField(e.target.value);
        } else {
            setError(false);
        }

        if (currentIcon === 'EditIcon') {
            setDisabled(true);
        } else {
            setCurrentIcon('ShowIcon');
        }
        setVisible(false);
    };

    return (
        <Input
            type={visible ? 'text' : 'password'}
            placeholder={placeholder}
            onChange={onChange}
            icon={currentIcon}
            value={value}
            ref={inputRef}
            onBlur={onBlur}
            onFocus={onFocus}
            error={error}
            onIconClick={onIconClick}
            errorText={errorText}
            size={size === 'small' ? 'small' : 'default'}
            disabled={fieldDisabled}
            extraClass={extraClass}
            {...rest}
        />
    );
};
