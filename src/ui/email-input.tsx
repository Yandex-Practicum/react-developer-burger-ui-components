import React, { useRef, useState } from 'react';
import { Input } from './input';

const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export const EmailInput = ({
    value,
    onChange,
    name,
    size = 'default',
}: {
    value: string;
    name: string;
    size?: 'default' | 'small';
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}) => {
    const [fieldDisabled, setDisabled] = useState(true);

    const [error, setError] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const onIconClick = () => {
        setDisabled(false);
        setTimeout(() => inputRef.current?.focus(), 0);
    };

    const validateField = (value: string) => {
        setError(!validateEmail(value));
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
        setDisabled(true);
    };
    return (
        <Input
            type="email"
            placeholder="Email"
            onChange={onChange}
            icon={'EditIcon'}
            value={value}
            ref={inputRef}
            onBlur={onBlur}
            onFocus={onFocus}
            name={name}
            error={error}
            disabled={fieldDisabled}
            onIconClick={onIconClick}
            errorText={'Ой, произошла ошибка!'}
            size={size}
        />
    );
};
