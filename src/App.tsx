// ============================================
// LifeHub - Main App Component
// ============================================

import { useState, useEffect } from 'react';
import { Sidebar, Header, MainLayout } from './components/layout';
import { Dashboard } from './components/dashboard';
import { TaskList, TaskDetailModal } from './components/tasks';
import type { Project, Task } from './types';
import { useProjectStore } from './stores/projectStore';
import { useTaskStore } from './stores/taskStore';
import { useGoalStore } from './stores/goalStore';
import { useJournalStore } from './stores/journalStore';
import { useHistoryStore } from './stores/historyStore';
import type { ViewType } from './types';
import { HabitsView } from './components/habits/HabitsView';
import { GoalsView } from './components/goals/GoalsView';
import { JournalView } from './components/journal';
import { InsightsView } from './components/analytics';
import { ProjectDetailModal } from './components/projects';
import { RoutinesView } from './components/routines/RoutinesView';
import { ReviewsView } from './components/reviews/ReviewsView';
import { NotificationManager } from './components/notifications/NotificationManager';
import { TipsManager } from './components/tips/TipsManager';
import { SettingsView } from './components/settings/SettingsView';
import styles from './App.module.css';

function App() {
    // Load data on mount
    const loadProjects = useProjectStore((s) => s.loadProjects);
    const loadTasks = useTaskStore((s) => s.loadTasks);
    const loadGoals = useGoalStore((s) => s.loadGoals);
    const loadEntries = useJournalStore((s) => s.loadEntries);
    const loadHistory = useHistoryStore((s) => s.loadHistory);

    useEffect(() => {
        loadProjects();
        loadTasks();
        loadGoals();
        loadEntries();
        loadHistory();
    }, [loadProjects, loadTasks, loadGoals, loadEntries, loadHistory]);

    // UI State
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [currentView, setCurrentView] = useState<ViewType>('dashboard');
    const [searchQuery, setSearchQuery] = useState('');

    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);

    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    // New state for TaskDetailModal
    const [isTaskDetailModalOpen, setIsTaskDetailModalOpen] = useState(false);
    const [initialTaskData, setInitialTaskData] = useState<Partial<Task>>({});

    // Store state
    const { selectedProjectId, projects } = useProjectStore();
    const { tasks, setFilters, getTasksByProject } = useTaskStore();

    // Filter tasks by search
    useEffect(() => {
        setFilters({ search: searchQuery });
    }, [searchQuery, setFilters]);

    // Get tasks for current view
    const currentTasks = selectedProjectId
        ? getTasksByProject(selectedProjectId)
        : tasks;

    // Handlers
    const handleNewTask = () => {
        // Try to select the currently selected project, or the first available non-archived project
        const defaultProject = projects.find(p => p.id === selectedProjectId) ||
            projects.find(p => !p.isArchived) ||
            projects[0];

        setInitialTaskData({ projectId: defaultProject?.id || '' });
        setSelectedTask(null);
        setIsTaskDetailModalOpen(true);
    };

    const handleCreateTask = (initialData?: Partial<Task>) => {
        setInitialTaskData(initialData || {});
        setSelectedTask(null);
        setIsTaskDetailModalOpen(true);
    };



    const handleTaskClick = (taskId: string) => {
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            setSelectedTask(task);
            setIsTaskDetailModalOpen(true);
        }
    };

    const handleNewProject = () => {
        setEditingProject(null);
        setIsProjectModalOpen(true);
    };

    const handleEditProject = (project: Project) => {
        setEditingProject(project);
        setIsProjectModalOpen(true);
    };

    return (
        <div className={styles.app}>
            {/* Sidebar */}
            <Sidebar
                isCollapsed={sidebarCollapsed}
                onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
                onNewProject={handleNewProject}
                onEditProject={handleEditProject}
                currentView={currentView}
                onViewChange={setCurrentView}
            />

            {/* Main Content */}
            <div className={styles.mainContainer}>
                {/* Header */}
                <Header
                    onNewTask={handleNewTask}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                />

                {/* Main Content */}
                <MainLayout>
                    {currentView === 'dashboard' && (
                        <Dashboard onTaskClick={handleTaskClick} />
                    )}

                    {currentView === 'routines' && (
                        <RoutinesView />
                    )}

                    {currentView === 'habits' && (
                        <HabitsView
                            onTaskClick={handleTaskClick}
                            onCreateTask={() => handleCreateTask({ taskType: 'habit' })}
                        />
                    )}

                    {currentView === 'goals' && (
                        <GoalsView />
                    )}

                    {currentView === 'journal' && (
                        <JournalView />
                    )}

                    {currentView === 'insights' && (
                        <InsightsView />
                    )}

                    {currentView === 'reviews' && (
                        <ReviewsView />
                    )}

                    {(currentView === 'tasks' || currentView === 'project') && (
                        <TaskList
                            tasks={currentView === 'project' ? currentTasks : tasks}
                            onTaskClick={handleTaskClick}
                            showFilters={true}
                        />
                    )}

                    {/* Placeholders for new sections */}
                    {['calendar'].includes(currentView) && (
                        <div style={{
                            padding: 'var(--space-8)',
                            textAlign: 'center',
                            color: 'var(--color-text-muted)'
                        }}>
                            <div style={{ fontSize: '48px', marginBottom: 'var(--space-4)' }}>🚧</div>
                            <h2 style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--space-2)' }}>
                                {currentView.charAt(0).toUpperCase() + currentView.slice(1)} Module
                            </h2>
                            <p>Coming soon in Phase 2 & 3</p>
                        </div>
                    )}

                    {currentView === 'settings' && (
                        <SettingsView onClose={() => setCurrentView('dashboard')} />
                    )}
                </MainLayout>
            </div>

            {/* Background Services */}
            <NotificationManager />
            <TipsManager />

            {/* Project Detail Modal */}
            <ProjectDetailModal
                project={editingProject}
                isOpen={isProjectModalOpen}
                onClose={() => {
                    setIsProjectModalOpen(false);
                    setEditingProject(null);
                }}
            />

            {/* Task Detail Modal (replaces simple New Task modal) */}
            <TaskDetailModal
                task={selectedTask}
                isOpen={isTaskDetailModalOpen}
                onClose={() => setIsTaskDetailModalOpen(false)}
                initialData={initialTaskData}
            />
        </div>
    );
}

export default App;
