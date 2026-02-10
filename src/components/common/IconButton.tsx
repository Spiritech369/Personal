// ============================================
// LifeHub - IconButton Component
// ============================================

import React from 'react';
import styles from './IconButton.module.css';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'ghost' | 'danger';
    tooltip?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
    icon,
    size = 'md',
    variant = 'default',
    tooltip,
    className = '',
    ...props
}) => {
    const classes = [
        styles.iconButton,
        styles[size],
        styles[variant],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button
            className={classes}
            title={tooltip}
            aria-label={tooltip}
            {...props}
        >
            {icon}
        </button>
    );
};

export default IconButton;
