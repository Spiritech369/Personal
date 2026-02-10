-- LifeHub Strategic Productivity System
-- Database Schema Migration
-- Phase 1: Core Foundation

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ========================================
-- JOURNALS
-- ========================================
CREATE TABLE IF NOT EXISTS journals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL, -- References auth.users in production
  type TEXT NOT NULL CHECK (type IN ('daily', 'decision', 'braindump')),
  date DATE NOT NULL,
  content JSONB NOT NULL,
  tags TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_journals_user_date ON journals(user_id, date DESC);
CREATE INDEX idx_journals_type ON journals(type);
CREATE INDEX idx_journals_tags ON journals USING GIN(tags);

-- ========================================
-- HABITS
-- ========================================
CREATE TABLE IF NOT EXISTS habits (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  min_version TEXT,
  ideal_version TEXT,
  energy_impact TEXT CHECK (energy_impact IN ('positive', 'neutral', 'negative')),
  linked_goal UUID, -- References goals(id), added after goals table
  life_area TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS habit_completions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  habit_id UUID NOT NULL REFERENCES habits(id) ON DELETE CASCADE,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  version TEXT CHECK (version IN ('min', 'ideal')),
  notes TEXT
);

CREATE INDEX idx_habits_user ON habits(user_id);
CREATE INDEX idx_habit_completions_habit ON habit_completions(habit_id, completed_at DESC);

-- ========================================
-- REVIEWS
-- ========================================
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('weekly', 'monthly', 'quarterly')),
  date DATE NOT NULL,
  prompts JSONB,
  responses JSONB,
  conclusions TEXT[],
  action_items TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_reviews_user_type ON reviews(user_id, type, date DESC);

-- ========================================
-- ROUTINES
-- ========================================
CREATE TABLE IF NOT EXISTS routines (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  steps JSONB NOT NULL, -- Array of {title, duration, notes}
  total_duration INTEGER, -- Auto-calculated in minutes
  auto_spawn_tasks BOOLEAN DEFAULT false,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS routine_executions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  routine_id UUID NOT NULL REFERENCES routines(id) ON DELETE CASCADE,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  steps_completed JSONB, -- Track which steps were done
  notes TEXT
);

CREATE INDEX idx_routines_user ON routines(user_id);
CREATE INDEX idx_routine_executions_routine ON routine_executions(routine_id, started_at DESC);

-- ========================================
-- GOALS
-- ========================================
CREATE TABLE IF NOT EXISTS goals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  vision TEXT,
  outcome TEXT NOT NULL, -- Measurable goal
  deadline DATE,
  life_area TEXT,
  parent_goal UUID REFERENCES goals(id),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'stagnated', 'completed', 'archived')),
  progress NUMERIC DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  last_activity TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_goals_user ON goals(user_id);
CREATE INDEX idx_goals_parent ON goals(parent_goal);
CREATE INDEX idx_goals_status ON goals(status);

-- Add foreign key for habits.linked_goal now that goals table exists
ALTER TABLE habits ADD CONSTRAINT fk_habits_goal 
  FOREIGN KEY (linked_goal) REFERENCES goals(id) ON DELETE SET NULL;

-- ========================================
-- PROJECTS (Enhancements to existing table)
-- ========================================
-- These are additions to likely existing projects table
-- Run only if columns don't exist

DO $$ 
BEGIN
  -- Add health column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'projects' AND column_name = 'health'
  ) THEN
    ALTER TABLE projects ADD COLUMN health TEXT DEFAULT 'ontrack' 
      CHECK (health IN ('ontrack', 'atrisk', 'blocked'));
  END IF;

  -- Add next_action column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'projects' AND column_name = 'next_action'
  ) THEN
    ALTER TABLE projects ADD COLUMN next_action TEXT;
  END IF;

  -- Add linked_goal column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'projects' AND column_name = 'linked_goal'
  ) THEN
    ALTER TABLE projects ADD COLUMN linked_goal UUID REFERENCES goals(id) ON DELETE SET NULL;
  END IF;

  -- Add last_activity column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'projects' AND column_name = 'last_activity'
  ) THEN
    ALTER TABLE projects ADD COLUMN last_activity TIMESTAMPTZ DEFAULT NOW();
  END IF;

  -- Add dependencies JSONB column (array of project/task IDs)
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'projects' AND column_name = 'dependencies'
  ) THEN
    ALTER TABLE projects ADD COLUMN dependencies JSONB DEFAULT '[]';
  END IF;

  -- Add blockers array
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'projects' AND column_name = 'blockers'
  ) THEN
    ALTER TABLE projects ADD COLUMN blockers TEXT[];
  END IF;
END $$;

-- ========================================
-- AUTOMATION RULES
-- ========================================
CREATE TABLE IF NOT EXISTS automation_rules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  condition JSONB NOT NULL, -- {type: 'energy|overdue|inactive|health', params: {...}}
  action JSONB NOT NULL, -- {type: 'reschedule|priority|notify|review', params: {...}}
  enabled BOOLEAN DEFAULT true,
  last_triggered TIMESTAMPTZ,
  trigger_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_automation_rules_user ON automation_rules(user_id);
CREATE INDEX idx_automation_rules_enabled ON automation_rules(enabled);

-- ========================================
-- VERSION HISTORY
-- ========================================
CREATE TABLE IF NOT EXISTS version_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  entity_id UUID NOT NULL,
  entity_type TEXT NOT NULL, -- 'task', 'project', 'goal', etc.
  changes JSONB NOT NULL,
  previous_version JSONB,
  user_id UUID NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_version_history_entity ON version_history(entity_id, entity_type, timestamp DESC);
CREATE INDEX idx_version_history_user ON version_history(user_id);

-- ========================================
-- LINKED_ITEMS (Join table for cross-references)
-- ========================================
CREATE TABLE IF NOT EXISTS linked_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  source_id UUID NOT NULL,
  source_type TEXT NOT NULL, -- 'journal', 'habit', 'routine', etc.
  target_id UUID NOT NULL,
  target_type TEXT NOT NULL, -- 'task', 'project', 'goal', etc.
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_linked_items_source ON linked_items(source_id, source_type);
CREATE INDEX idx_linked_items_target ON linked_items(target_id, target_type);

-- ========================================
-- TRIGGERS FOR UPDATED_AT
-- ========================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply to all tables with updated_at
CREATE TRIGGER update_journals_updated_at BEFORE UPDATE ON journals 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_habits_updated_at BEFORE UPDATE ON habits 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_reviews_updated_at BEFORE UPDATE ON reviews 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_routines_updated_at BEFORE UPDATE ON routines 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_goals_updated_at BEFORE UPDATE ON goals 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_automation_rules_updated_at BEFORE UPDATE ON automation_rules 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
