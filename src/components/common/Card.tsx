// ============================================
// LifeHub - Card Component
// ============================================

import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    variant?: 'default' | 'elevated' | 'outlined' | 'interactive';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
    children,
    variant = 'default',
    padding = 'md',
    className = '',
    onClick,
}) => {
    const classes = [
        styles.card,
        styles[variant],
        styles[`padding-${padding}`],
        onClick ? styles.clickable : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={classes} onClick={onClick} role={onClick ? 'button' : undefined}>
            {children}
        </div>
    );
};

// Card subcomponents
export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className = '',
}) => <div className={`${styles.header} ${className}`}>{children}</div>;

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className = '',
}) => <div className={`${styles.content} ${className}`}>{children}</div>;

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className = '',
}) => <div className={`${styles.footer} ${className}`}>{children}</div>;

export default Card;
