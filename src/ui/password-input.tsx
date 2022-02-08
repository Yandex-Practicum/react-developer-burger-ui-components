import React, { useRef, useState } from 'react';
import { Input } from './input';

export const PasswordInput: React.FC<{
    value: string;
    placeholder?: string;
    size?: 'default' | 'small';
    icon?: 'HideIcon' | 'ShowIcon' | 'EditIcon';
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    rest?: { [key: string]: string | number | boolean };
}> = ({ value, placeholder = 'Пароль', onChange, size, icon = 'ShowIcon', ...rest }) => {
    const [visible, setVisible] = useState(false);
    const [currentIcon, setCurrentIcon] = useState(icon);
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
            errorText={'Некорректный пароль'}
            size={size === 'small' ? 'small' : 'default'}
            disabled={fieldDisabled}
            {...rest}
        />
    );
};
