
// ============================================
// LifeHub - TextArea Component
// ============================================

import React, { forwardRef } from 'react';
import styles from './TextArea.module.css';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    hint?: string;
    fullWidth?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    (
        {
            label,
            error,
            hint,
            fullWidth = true,
            className = '',
            id,
            rows = 4,
            ...props
        },
        ref
    ) => {
        const inputId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

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
                    <textarea
                        ref={ref}
                        id={inputId}
                        rows={rows}
                        className={styles.textarea}
                        {...props}
                    />
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

TextArea.displayName = 'TextArea';

export default TextArea;
