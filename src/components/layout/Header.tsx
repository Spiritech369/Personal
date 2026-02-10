// ============================================
// LifeHub - Header Component
// ============================================

import React from 'react';

import { Search, Plus, Bell, User, Shield, AlertCircle, AlertTriangle, Book } from 'lucide-react';
import { IconButton, Input, Button } from '../common';
import { useProjectStore } from '../../stores/projectStore';
import { useTaskStore } from '../../stores/taskStore';
import { calculateProjectHealth } from '../../utils/helpers';
import { JournalEntryModal } from '../journal/JournalEntryModal';
import styles from './Header.module.css';

interface HeaderProps {
    onNewTask: () => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
    onNewTask,
    searchQuery,
    onSearchChange,
}) => {
    const { selectedProjectId, getProjectById } = useProjectStore();
    const { getTasksByProject } = useTaskStore();
    const [isJournalOpen, setIsJournalOpen] = React.useState(false);

    const selectedProject = selectedProjectId ? getProjectById(selectedProjectId) : null;
    const projectTasks = selectedProjectId ? getTasksByProject(selectedProjectId) : [];
    const health = calculateProjectHealth(projectTasks);

    const getHealthIcon = () => {
        switch (health) {
            case 'blocked': return <AlertCircle size={14} />;
            case 'at_risk': return <AlertTriangle size={14} />;
            default: return <Shield size={14} />;
        }
    };

    const getHealthLabel = () => {
        switch (health) {
            case 'blocked': return 'Blocked';
            case 'at_risk': return 'At Risk';
            default: return 'On Track';
        }
    };

    return (
        <header className={styles.header}>
            {/* Left: Title */}
            <div className={styles.left}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>
                        {selectedProject ? selectedProject.name : 'Dashboard'}
                    </h1>
                    {selectedProject && (
                        <div className={`${styles.healthBadge} ${styles[health]}`}>
                            {getHealthIcon()}
                            <span>{getHealthLabel()}</span>
                        </div>
                    )}
                </div>
                {selectedProject && (
                    <span className={styles.description}>{selectedProject.description}</span>
                )}
            </div>

            {/* Center: Search */}
            <div className={styles.center}>
                <Input
                    type="search"
                    placeholder="Search tasks..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    leftIcon={<Search size={18} />}
                    fullWidth={false}
                    className={styles.searchInput}
                />
            </div>

            {/* Right: Actions */}
            <div className={styles.right}>
                <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setIsJournalOpen(true)}
                    style={{ gap: 6 }}
                >
                    <Book size={16} className="text-accent" />
                    <span>Journal</span>
                </Button>

                <button className={styles.newTaskBtn} onClick={onNewTask}>
                    <Plus size={18} />
                    <span>New Task</span>
                </button>

                <IconButton
                    icon={<Bell size={18} />}
                    variant="ghost"
                    tooltip="Notifications"
                />

                <div className={styles.userAvatar}>
                    <User size={20} />
                </div>
            </div>

            {isJournalOpen && (
                <JournalEntryModal isOpen={true} onClose={() => setIsJournalOpen(false)} />
            )}
        </header>
    );
};

export default Header;
