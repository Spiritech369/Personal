// ============================================
// LifeHub - Button Component
// ============================================

import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    className = '',
    disabled,
    ...props
}) => {
    const classes = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : '',
        isLoading ? styles.loading : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            className={classes}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <span className={styles.spinner} />}
            {!isLoading && leftIcon && <span className={styles.icon}>{leftIcon}</span>}
            {children && <span className={styles.label}>{children}</span>}
            {!isLoading && rightIcon && <span className={styles.icon}>{rightIcon}</span>}
        </button>
    );
};

export default Button;
