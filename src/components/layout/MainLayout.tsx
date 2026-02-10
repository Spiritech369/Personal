// ============================================
// LifeHub - MainLayout Component
// ============================================

import React from 'react';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    );
};

export default MainLayout;
