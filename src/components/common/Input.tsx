// ============================================
// LifeHub - Input Component
// ============================================

import React, { forwardRef } from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    hint?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            hint,
            leftIcon,
            rightIcon,
            fullWidth = true,
            className = '',
            id,
            ...props
        },
        ref
    ) => {
        const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

        const wrapperClasses = [
            styles.wrapper,
            fullWidth ? styles.fullWidth : '',
            error ? styles.hasError : '',
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <div className={wrapperClasses}>
                {label && (
                    <label htmlFor={inputId} className={styles.label}>
                        {label}
                    </label>
                )}
                <div className={styles.inputWrapper}>
                    {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
                    <input
                        ref={ref}
                        id={inputId}
                        className={`${styles.input} ${leftIcon ? styles.hasLeftIcon : ''} ${rightIcon ? styles.hasRightIcon : ''
                            }`}
                        {...props}
                    />
                    {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
                </div>
                {(error || hint) && (
                    <span className={error ? styles.error : styles.hint}>
                        {error || hint}
                    </span>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;
