// ============================================
// LifeHub - Sidebar Component
// ============================================

import React, { useState } from 'react';
import {
    LayoutDashboard,
    FolderKanban,
    Plus,
    ChevronLeft,
    ChevronRight,
    Settings,
    Archive,
    Folder,
    Briefcase,
    Home,
    Heart,
    Star,
    Zap,
    Target,
    Trophy,
    Rocket,
    Book,
    Code,
    Music,
    Camera,
    Plane,
    Car,
    Dumbbell,
    Leaf,
    Sun,
    Moon,
    Coffee,
    CheckSquare,
    RefreshCw,
    Calendar,
    BarChart2,
    ListChecks,
    CalendarCheck,
} from 'lucide-react';
import { useProjectStore } from '../../stores/projectStore';
import { IconButton } from '../common';
import type { ProjectIcon, ViewType } from '../../types';
import styles from './Sidebar.module.css';

// Icon mapping
const iconMap: Record<ProjectIcon, any> = {
    Folder,
    Briefcase,
    Home,
    Heart,
    Star,
    Zap,
    Target,
    Trophy,
    Rocket,
    Book,
    Code,
    Music,
    Camera,
    Plane,
    Car,
    Dumbbell,
    Leaf,
    Sun,
    Moon,
    Coffee,
};

interface SidebarProps {
    isCollapsed: boolean;
    onToggle: () => void;
    onNewProject: () => void;
    currentView: ViewType;
    onViewChange: (view: ViewType) => void;
    onEditProject: (project: any) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
    isCollapsed,
    onToggle,
    onNewProject,
    currentView,
    onViewChange,
    onEditProject,
}) => {
    const { projects, selectedProjectId, selectProject } = useProjectStore();
    const [showArchived, setShowArchived] = useState(false);

    const activeProjects = projects.filter((p) => !p.isArchived);
    const archivedProjects = projects.filter((p) => p.isArchived);

    const handleProjectClick = (projectId: string) => {
        selectProject(projectId);
        onViewChange('project');
    };

    const getProjectIcon = (iconName: string) => {
        const IconComponent = iconMap[iconName as ProjectIcon] || Folder;
        return <IconComponent size={18} />;
    };

    return (
        <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
            {/* Logo */}
            <div className={styles.logo}>
                <div className={styles.logoIcon}>
                    <Zap size={24} />
                </div>
                {!isCollapsed && <span className={styles.logoText}>LifeHub</span>}
            </div>

            {/* Navigation */}
            <nav className={styles.nav}>
                {/* Dashboard */}
                <button
                    className={`${styles.navItem} ${currentView === 'dashboard' ? styles.active : ''}`}
                    onClick={() => {
                        selectProject(null);
                        onViewChange('dashboard');
                    }}
                >
                    <LayoutDashboard size={20} />
                    {!isCollapsed && <span>Dashboard</span>}
                </button>

                {/* Tasks */}
                <button
                    className={`${styles.navItem} ${currentView === 'tasks' ? styles.active : ''}`}
                    onClick={() => {
                        selectProject(null);
                        onViewChange('tasks');
                    }}
                >
                    <CheckSquare size={20} />
                    {!isCollapsed && <span>Tasks</span>}
                </button>

                {/* Projects Section */}
                <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <FolderKanban size={16} />
                        {!isCollapsed && (
                            <>
                                <span className={styles.sectionTitle}>Projects</span>
                                <IconButton
                                    icon={<Plus size={14} />}
                                    size="sm"
                                    variant="ghost"
                                    onClick={onNewProject}
                                    tooltip="New Project"
                                />
                            </>
                        )}
                    </div>

                    {/* Project List */}
                    <div className={styles.projectList}>
                        {activeProjects.map((project) => (
                            <button
                                key={project.id}
                                className={`${styles.projectItem} ${currentView === 'project' && selectedProjectId === project.id ? styles.active : ''}`}
                                onClick={() => handleProjectClick(project.id)}
                            >
                                <span
                                    className={styles.projectIcon}
                                    style={{ color: project.color }}
                                >
                                    {getProjectIcon(project.icon)}
                                </span>
                                {!isCollapsed && (
                                    <>
                                        <span className={styles.projectName}>{project.name}</span>
                                        <button
                                            className={styles.editProjectBtn}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onEditProject(project);
                                            }}
                                            title="Edit Project"
                                        >
                                            <Settings size={14} />
                                        </button>
                                    </>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Archived Toggle */}
                    {archivedProjects.length > 0 && !isCollapsed && (
                        <>
                            <button
                                className={styles.archiveToggle}
                                onClick={() => setShowArchived(!showArchived)}
                            >
                                <Archive size={14} />
                                <span>Archived ({archivedProjects.length})</span>
                            </button>

                            {showArchived && (
                                <div className={styles.projectList}>
                                    {archivedProjects.map((project) => (
                                        <button
                                            key={project.id}
                                            className={`${styles.projectItem} ${styles.archived} ${currentView === 'project' && selectedProjectId === project.id ? styles.active : ''}`}
                                            onClick={() => handleProjectClick(project.id)}
                                        >
                                            <span
                                                className={styles.projectIcon}
                                                style={{ color: project.color, opacity: 0.5 }}
                                            >
                                                {getProjectIcon(project.icon)}
                                            </span>
                                            <span className={styles.projectName}>{project.name}</span>
                                            <button
                                                className={styles.editProjectBtn}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onEditProject(project);
                                                }}
                                                title="Edit Project"
                                            >
                                                <Settings size={14} />
                                            </button>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* Goals */}
                <button
                    className={`${styles.navItem} ${currentView === 'goals' ? styles.active : ''}`}
                    onClick={() => onViewChange('goals')}
                >
                    <Target size={20} />
                    {!isCollapsed && <span>Goals</span>}
                </button>

                {/* Routines */}
                <button
                    className={`${styles.navItem} ${currentView === 'routines' ? styles.active : ''}`}
                    onClick={() => onViewChange('routines')}
                >
                    <ListChecks size={20} />
                    {!isCollapsed && <span>Routines</span>}
                </button>

                {/* Reviews */}
                <button
                    className={`${styles.navItem} ${currentView === 'reviews' ? styles.active : ''}`}
                    onClick={() => onViewChange('reviews')}
                >
                    <CalendarCheck size={20} />
                    {!isCollapsed && <span>Reviews</span>}
                </button>

                {/* Habits */}
                <button
                    className={`${styles.navItem} ${currentView === 'habits' ? styles.active : ''}`}
                    onClick={() => onViewChange('habits')}
                >
                    <RefreshCw size={20} />
                    {!isCollapsed && <span>Habits</span>}
                </button>

                {/* Calendar */}
                <button
                    className={`${styles.navItem} ${currentView === 'calendar' ? styles.active : ''}`}
                    onClick={() => onViewChange('calendar')}
                >
                    <Calendar size={20} />
                    {!isCollapsed && <span>Calendar</span>}
                </button>

                {/* Journal */}
                <button
                    className={`${styles.navItem} ${currentView === 'journal' ? styles.active : ''}`}
                    onClick={() => onViewChange('journal')}
                >
                    <Book size={20} />
                    {!isCollapsed && <span>Journal</span>}
                </button>

                {/* Insights */}
                <button
                    className={`${styles.navItem} ${currentView === 'insights' ? styles.active : ''}`}
                    onClick={() => onViewChange('insights')}
                >
                    <BarChart2 size={20} />
                    {!isCollapsed && <span>Insights</span>}
                </button>
            </nav>

            {/* Footer */}
            <div className={styles.footer}>
                <button
                    className={`${styles.navItem} ${currentView === 'settings' ? styles.active : ''}`}
                    onClick={() => onViewChange('settings')}
                >
                    <Settings size={20} />
                    {!isCollapsed && <span>Settings</span>}
                </button>

                <button className={styles.collapseBtn} onClick={onToggle}>
                    {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
