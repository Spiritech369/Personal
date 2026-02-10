import React, { useState } from 'react';
import { useGoalStore } from '../../stores/goalStore';
import { useProjectStore } from '../../stores/projectStore';
import { Goal, Project, ID } from '../../types';
import * as Icons from 'lucide-react';
import styles from './GoalTreeView.module.css';

interface GoalNodeProps {
    goal: Goal;
    allGoals: Goal[];
    allProjects: Project[];
    level: number;
    onSelectGoal: (id: ID) => void;
    onSelectProject: (id: ID) => void;
}

const GoalNode: React.FC<GoalNodeProps> = ({
    goal,
    allGoals,
    allProjects,
    level,
    onSelectGoal,
    onSelectProject
}) => {
    const [isExpanded, setIsExpanded] = useState(true);

    // Find children
    const subMinGoals = allGoals.filter(g => g.parentId === goal.id);
    const linkedProjects = allProjects.filter(p => p.goalId === goal.id);

    const hasChildren = subMinGoals.length > 0 || linkedProjects.length > 0;

    const Icon = (Icons as any)[goal.icon] || Icons.Target;

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.treeItem}>
            <div
                className={styles.header}
                onClick={() => onSelectGoal(goal.id)}
                style={{ marginLeft: `${level * 12}px` }}
            >
                <div className={styles.iconWrapper}>
                    {hasChildren ? (
                        <button className={styles.expandBtn} onClick={handleToggle}>
                            {isExpanded ? <Icons.ChevronDown size={14} /> : <Icons.ChevronRight size={14} />}
                        </button>
                    ) : (
                        <span style={{ width: 14 }} />
                    )}
                    <Icon size={18} />
                </div>

                <div className={styles.content}>
                    <span className={styles.title}>{goal.title}</span>

                    <div className={styles.meta}>
                        <span className={`${styles.statusBadge} ${styles[`status_${goal.status}`]}`}>
                            {goal.status.replace('_', ' ')}
                        </span>
                        {goal.deadline && (
                            <span>📅 {new Date(goal.deadline).toLocaleDateString()}</span>
                        )}
                        <span>{goal.progress}%</span>
                    </div>
                </div>
            </div>

            {isExpanded && hasChildren && (
                <div className={styles.childrenContainer}>
                    {/* Render Linked Projects First or Last? Let's say mixed or separate. */}
                    {linkedProjects.map(project => {
                        const ProjectIcon = (Icons as any)[project.icon] || Icons.Folder;
                        return (
                            <div
                                key={project.id}
                                className={styles.projectItem}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onSelectProject(project.id);
                                }}
                            >
                                <ProjectIcon size={14} style={{ marginRight: 8, color: project.color }} />
                                <span>{project.name}</span>
                            </div>
                        );
                    })}

                    {/* Render Subgoals */}
                    {subMinGoals.map(subGoal => (
                        <GoalNode
                            key={subGoal.id}
                            goal={subGoal}
                            allGoals={allGoals}
                            allProjects={allProjects}
                            level={level + 1}
                            onSelectGoal={onSelectGoal}
                            onSelectProject={onSelectProject}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export const GoalTreeView: React.FC = () => {
    const { goals, selectGoal } = useGoalStore();
    const { projects, selectProject } = useProjectStore();

    // Only render top-level goals (no parent)
    const topLevelGoals = goals.filter(g => !g.parentId);

    return (
        <div className={styles.container}>
            <h3 style={{ marginBottom: '1rem', paddingLeft: '0.5rem' }}>Goal Hierarchy</h3>
            {topLevelGoals.length === 0 ? (
                <div style={{ padding: '1rem', color: '#888' }}>
                    No goals defined yet. Create your first goal!
                </div>
            ) : (
                topLevelGoals.map(goal => (
                    <GoalNode
                        key={goal.id}
                        goal={goal}
                        allGoals={goals}
                        allProjects={projects}
                        level={0}
                        onSelectGoal={selectGoal}
                        onSelectProject={selectProject}
                    />
                ))
            )}
        </div>
    );
};
