import React, { useRef, useState } from 'react';
import { Input } from './input';

const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

interface TEmailInputInterface
    extends Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'type' | 'ref'> {
    value: string;
    size?: 'default' | 'small';
    placeholder?: string;
    isIcon?: boolean;
    extraClass?: string;
    errorText?: string;
    checkValid?: (isValid: boolean) => void;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const EmailInput: React.FC<TEmailInputInterface> = ({
    value,
    errorText = 'Ой, произошла ошибка!',
    checkValid,
    onChange,
    size = 'default',
    placeholder = 'E-mail',
    isIcon = false,
    extraClass = '',
    ...rest
}) => {
    const [fieldDisabled, setDisabled] = useState(isIcon);

    const [error, setError] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const onIconClick = () => {
        setDisabled(false);
        setTimeout(() => inputRef.current?.focus(), 0);
    };

    const validateField = (value: string) => {
        const isValid = validateEmail(value);
        setError(!isValid);
        checkValid?.(isValid);
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
        isIcon && setDisabled(true);
    };

    return (
        <Input
            type="email"
            placeholder={placeholder}
            onChange={onChange}
            icon={isIcon ? 'EditIcon' : undefined}
            value={value}
            ref={inputRef}
            onBlur={onBlur}
            onFocus={onFocus}
            error={error}
            disabled={fieldDisabled}
            onIconClick={onIconClick}
            errorText={errorText}
            size={size}
            extraClass={extraClass}
            {...rest}
        />
    );
};
