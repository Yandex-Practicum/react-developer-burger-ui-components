import React, { useCallback, useMemo, useRef } from 'react';
import clsx from 'clsx';
import { useState } from 'react';
import * as Icons from './icons';
import './input.css';
import { TICons } from './icons';

type TInputInterface = {
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    value: string;
    name?: string;
    success?: boolean;
    error?: boolean;
    disabled?: boolean;
    icon?: keyof TICons;
    errorText?: string;
    size?: 'default' | 'small';
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
    onIconClick?(e: React.MouseEvent<HTMLDivElement>): void;
    onBlur?(e?: React.FocusEvent<HTMLInputElement>): void;
    onFocus?(e?: React.FocusEvent<HTMLInputElement>): void;
};

function useCombinedRefs<T = HTMLElement>(
    ...refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.MutableRefObject<T | null> {
    const targetRef = React.useRef<T>(null);
    React.useEffect(() => {
        refs.forEach((ref) => {
            if (typeof ref === 'function') {
                ref(targetRef.current);
            } else if (ref != null) {
                (ref as React.MutableRefObject<T | null>).current = targetRef.current;
            }
        });
    }, [refs]);
    return targetRef;
}

export const Input = React.forwardRef<HTMLInputElement, TInputInterface>(
    (
        {
            type,
            placeholder,
            onChange,
            icon,
            onIconClick,
            name,
            success,
            error,
            value,
            errorText,
            disabled,
            onBlur,
            onFocus,
            size = 'default',
        },
        forwardedRef
    ) => {
        const [focus, setFocus] = useState(false);
        const innerRef = useRef<HTMLInputElement>(null);
        const ref = useCombinedRefs<HTMLInputElement>(innerRef, forwardedRef);

        const handleInputFocus = useCallback(
            (e?: React.FocusEvent<HTMLInputElement>) => {
                setFocus(true);
                if (typeof onFocus === 'function') {
                    onFocus(e);
                }
            },
            [setFocus, onFocus]
        );

        const forceFocus = useCallback(() => {
            ref?.current?.focus();
        }, [ref]);

        const handleInputBlur = useCallback(
            (e?: React.FocusEvent<HTMLInputElement>) => {
                setFocus(false);
                if (typeof onBlur === 'function') {
                    onBlur(e);
                }
            },
            [setFocus, onBlur]
        );

        const onIconClickProxy = useCallback(
            (e: React.MouseEvent<HTMLDivElement>) => {
                e.stopPropagation();
                if (typeof onIconClick === 'function') {
                    onIconClick(e);
                } else {
                    forceFocus();
                }
            },
            [onIconClick, forceFocus]
        );

        const iconToRender = useMemo(() => {
            const Icon = icon && Icons[icon];
            const hasAction = typeof onIconClick === 'function';
            const dumbIcon = disabled && !hasAction;

            return Icon ? (
                <div
                    className={clsx('input__icon', {
                        ['input__icon-action']: hasAction,
                        ['input__icon-disabled']: dumbIcon,
                    })}
                    onClick={onIconClickProxy}
                >
                    <Icon type={dumbIcon ? 'secondary' : 'primary'} />
                </div>
            ) : null;
        }, [icon, onIconClickProxy, disabled, onIconClick]);

        const onWrapperClick = useCallback(() => {
            forceFocus();
        }, [forceFocus]);

        const errorToRender = useMemo(
            () =>
                error &&
                errorText && (
                    <p className={clsx('input__error', { [`text_type_main-${size}`]: size })}>
                        {errorText}
                    </p>
                ),
            [error, errorText, size]
        );

        return (
            <div className={'input__container'}>
                <div
                    /*eslint no-useless-computed-key: "off"*/
                    className={clsx('input', {
                        [`pr-6 pl-6`]: size === 'default',
                        [`input_type_${type}`]: type,
                        [`input_size_${size}`]: size,
                        ['input_status_error']: error,
                        ['input_status_disabled']: disabled,
                        ['input_status_active']: focus,
                    })}
                    onClick={onWrapperClick}
                >
                    <label
                        /*eslint no-useless-computed-key: "off"*/
                        className={clsx('input__placeholder text noselect', {
                            [`text_type_main-${size}`]: size,
                            ['input__placeholder-focused']: focus,
                            ['input__placeholder-filled']: value,
                            ['input__placeholder-disabled']: disabled,
                        })}
                    >
                        {placeholder}
                    </label>

                    <input
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        className={clsx('text', 'input__textfield', {
                            [`text_type_main-${size}`]: size,
                            ['input__textfield-disabled']: disabled,
                        })}
                        type={type}
                        ref={ref}
                        onChange={onChange}
                        name={name}
                        value={value}
                        disabled={disabled}
                    />
                    {iconToRender}
                </div>
                {errorToRender}
            </div>
        );
    }
);

Input.displayName = 'Input';
