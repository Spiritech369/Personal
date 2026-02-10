import React, { useState, useEffect } from 'react';
import {
    X,
    Trash2,
    Calendar,
    Target,
    Save,
    Briefcase,
} from 'lucide-react';
import type { Project, ProjectFormData, ProjectStatus, ID } from '../../types';
import { useProjectStore } from '../../stores/projectStore';
import { useGoalStore } from '../../stores/goalStore';
import { PROJECT_COLORS } from '../../types';
import { Button, Modal } from '../common';
import styles from './ProjectDetailModal.module.css';

interface ProjectDetailModalProps {
    project: Project | null; // null for new project
    isOpen: boolean;
    onClose: () => void;
    initialData?: Partial<ProjectFormData>;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
    project,
    isOpen,
    onClose,
    initialData,
}) => {
    const { addProject, updateProject, deleteProject } = useProjectStore();
    const { goals } = useGoalStore();

    // Local state
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState<string>(PROJECT_COLORS[0]);
    const [icon, setIcon] = useState('Briefcase');
    const [status, setStatus] = useState<ProjectStatus>('active');
    const [goalId, setGoalId] = useState<ID | null>(null);
    const [deadline, setDeadline] = useState('');
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    // Sync state with project prop or initialData
    useEffect(() => {
        if (project) {
            setName(project.name);
            setDescription(project.description);
            setColor(project.color);
            setIcon(project.icon);
            setStatus(project.status);
            setGoalId(project.goalId);
            setDeadline(project.deadline ? project.deadline.split('T')[0] : '');
            setShowDeleteConfirm(false);
        } else {
            // Defaults for new project
            setName(initialData?.name || '');
            setDescription(initialData?.description || '');
            setColor(initialData?.color || PROJECT_COLORS[0]);
            setIcon(initialData?.icon || 'Briefcase');
            setStatus(initialData?.status || 'active');
            setGoalId(initialData?.goalId || null);
            setDeadline(initialData?.deadline ? initialData.deadline.split('T')[0] : '');
            setShowDeleteConfirm(false);
        }
    }, [project, isOpen, initialData]);

    const handleSave = () => {
        if (!name.trim()) return;

        const projectData: ProjectFormData = {
            name: name.trim(),
            description: description.trim(),
            color,
            icon,
            status,
            goalId,
            parentId: null, // Sub-projects not fully implemented in UI yet
            deadline: deadline ? new Date(deadline).toISOString() : null,
        };

        if (project) {
            updateProject(project.id, projectData);
        } else {
            addProject(projectData);
        }
        onClose();
    };

    const handleDelete = () => {
        if (project) {
            deleteProject(project.id);
            onClose();
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={project ? 'Edit Project' : 'New Project'} size="lg" showCloseButton={false}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <input
                        className={styles.titleInput}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Project Name"
                        autoFocus
                    />
                    <button className={styles.closeBtn} onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className={styles.content}>
                    {/* Main Column */}
                    <div className={styles.mainColumn}>

                        {/* Description */}
                        <div className={styles.section}>
                            <label className={styles.label}>Description</label>
                            <textarea
                                className={styles.textarea}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="What is this project about?"
                                rows={4}
                            />
                        </div>

                        {/* Color Picker */}
                        <div className={styles.section}>
                            <label className={styles.label}>Color Key</label>
                            <div className={styles.colorPicker}>
                                {PROJECT_COLORS.map((c) => (
                                    <div
                                        key={c}
                                        className={`${styles.colorBtn} ${color === c ? styles.selected : ''}`}
                                        style={{ backgroundColor: c }}
                                        onClick={() => setColor(c)}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Meta Column */}
                    <div className={styles.metaColumn}>

                        {/* Status */}
                        <div className={styles.metaItem}>
                            <label className={styles.label}>Status</label>
                            <select
                                className={styles.select}
                                value={status}
                                onChange={(e) => setStatus(e.target.value as ProjectStatus)}
                            >
                                <option value="active">Active</option>
                                <option value="on_hold">On Hold</option>
                                <option value="completed">Completed</option>
                                <option value="archived">Archived</option>
                            </select>
                        </div>

                        {/* Linked Goal */}
                        <div className={styles.metaItem}>
                            <label className={styles.label}>
                                <Target size={16} /> Linked Goal
                            </label>
                            <select
                                className={styles.select}
                                value={goalId || ''}
                                onChange={(e) => setGoalId(e.target.value || null)}
                            >
                                <option value="">No Goal</option>
                                {goals.map(g => (
                                    <option key={g.id} value={g.id}>{g.title}</option>
                                ))}
                            </select>
                        </div>

                        {/* Deadline */}
                        <div className={styles.metaItem}>
                            <label className={styles.label}>
                                <Calendar size={16} /> Deadline
                            </label>
                            <input
                                type="date"
                                className={styles.input}
                                value={deadline}
                                onChange={(e) => setDeadline(e.target.value)}
                            />
                        </div>

                        {/* Icon Name */}
                        <div className={styles.metaItem}>
                            <label className={styles.label}>
                                <Briefcase size={16} /> Icon Name
                            </label>
                            <input
                                type="text"
                                className={styles.input}
                                value={icon}
                                onChange={(e) => setIcon(e.target.value)}
                                placeholder="e.g. Briefcase"
                            />
                        </div>

                    </div>
                </div>

                {/* Footer */}
                <div className={styles.footer}>
                    {project ? (
                        showDeleteConfirm ? (
                            <div className={styles.deleteConfirm}>
                                <span>Delete this project?</span>
                                <Button variant="danger" size="sm" onClick={handleDelete}>
                                    Yes, Delete
                                </Button>
                                <Button variant="ghost" size="sm" onClick={() => setShowDeleteConfirm(false)}>
                                    Cancel
                                </Button>
                            </div>
                        ) : (
                            <Button
                                variant="ghost"
                                leftIcon={<Trash2 size={16} />}
                                onClick={() => setShowDeleteConfirm(true)}
                            >
                                Delete
                            </Button>
                        )
                    ) : (
                        <div /> // Spacer
                    )}

                    <div className={styles.footerActions}>
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleSave} leftIcon={<Save size={16} />}>
                            Save Project
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ProjectDetailModal;
