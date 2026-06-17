/*
# Lex Training Platform Schema

## Overview
Single-tenant training platform for legal writing practice. No user authentication required —
all data is shared/public within the platform so students can track their own progress via
a persistent profile stored in localStorage (identified by a generated UUID).

## New Tables

### user_profiles
Stores the learner's profile, accumulated XP, current level, and display name.
- id (uuid, primary key) — the locally-generated user ID stored in localStorage
- name (text) — display name chosen by the user
- xp (integer) — total experience points accumulated
- level (integer) — current level derived from XP
- streak_days (integer) — current daily practice streak
- last_activity_date (date) — last day the user practiced
- created_at (timestamptz)

### exercise_history
Records every completed exercise with its score, case info, and XP earned.
- id (uuid, primary key)
- user_id (uuid) — references user_profiles.id
- case_id (integer) — which case scenario was practiced
- case_title (text) — snapshot of case title at time of submission
- case_area (text) — law area (Consumidor, Trabalhista, etc.)
- case_difficulty (text) — Fácil / Médio / Difícil
- score (integer) — score 0-100
- word_count (integer) — words written
- checked_items (integer) — checklist items marked
- xp_earned (integer) — XP awarded for this exercise
- petition_text (text) — the full text submitted
- completed_at (timestamptz)

### achievements
Defines all possible achievements/badges in the system.
- id (text, primary key) — slug identifier e.g. "first_petition"
- title (text) — display title
- description (text) — what the user did to earn it
- icon (text) — lucide icon name
- xp_reward (integer) — XP bonus for earning the achievement
- category (text) — 'milestone' | 'streak' | 'quality' | 'volume'

### user_achievements
Junction table tracking which achievements each user has unlocked.
- id (uuid, primary key)
- user_id (uuid) — references user_profiles.id
- achievement_id (text) — references achievements.id
- earned_at (timestamptz)

## Security
RLS enabled on all tables. Since this is single-tenant with no auth, policies use
TO anon, authenticated with USING (true) to allow the anon-key frontend to read/write.
This is intentional for a shared educational platform.
*/

-- ============================================================
-- user_profiles
-- ============================================================
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY,
  name text NOT NULL DEFAULT 'Estudante',
  xp integer NOT NULL DEFAULT 0,
  level integer NOT NULL DEFAULT 1,
  streak_days integer NOT NULL DEFAULT 0,
  last_activity_date date,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_user_profiles" ON user_profiles;
CREATE POLICY "anon_select_user_profiles" ON user_profiles FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_user_profiles" ON user_profiles;
CREATE POLICY "anon_insert_user_profiles" ON user_profiles FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_user_profiles" ON user_profiles;
CREATE POLICY "anon_update_user_profiles" ON user_profiles FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_user_profiles" ON user_profiles;
CREATE POLICY "anon_delete_user_profiles" ON user_profiles FOR DELETE
  TO anon, authenticated USING (true);

-- ============================================================
-- exercise_history
-- ============================================================
CREATE TABLE IF NOT EXISTS exercise_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  case_id integer NOT NULL,
  case_title text NOT NULL,
  case_area text NOT NULL,
  case_difficulty text NOT NULL,
  score integer NOT NULL,
  word_count integer NOT NULL DEFAULT 0,
  checked_items integer NOT NULL DEFAULT 0,
  xp_earned integer NOT NULL DEFAULT 0,
  petition_text text,
  completed_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_exercise_history_user_id ON exercise_history(user_id);
CREATE INDEX IF NOT EXISTS idx_exercise_history_completed_at ON exercise_history(completed_at DESC);

ALTER TABLE exercise_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_exercise_history" ON exercise_history;
CREATE POLICY "anon_select_exercise_history" ON exercise_history FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_exercise_history" ON exercise_history;
CREATE POLICY "anon_insert_exercise_history" ON exercise_history FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_exercise_history" ON exercise_history;
CREATE POLICY "anon_update_exercise_history" ON exercise_history FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_exercise_history" ON exercise_history;
CREATE POLICY "anon_delete_exercise_history" ON exercise_history FOR DELETE
  TO anon, authenticated USING (true);

-- ============================================================
-- achievements
-- ============================================================
CREATE TABLE IF NOT EXISTS achievements (
  id text PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL DEFAULT 'Award',
  xp_reward integer NOT NULL DEFAULT 0,
  category text NOT NULL DEFAULT 'milestone'
);

ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_achievements" ON achievements;
CREATE POLICY "anon_select_achievements" ON achievements FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_achievements" ON achievements;
CREATE POLICY "anon_insert_achievements" ON achievements FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_achievements" ON achievements;
CREATE POLICY "anon_update_achievements" ON achievements FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

-- ============================================================
-- user_achievements
-- ============================================================
CREATE TABLE IF NOT EXISTS user_achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  achievement_id text NOT NULL REFERENCES achievements(id) ON DELETE CASCADE,
  earned_at timestamptz DEFAULT now(),
  UNIQUE (user_id, achievement_id)
);

CREATE INDEX IF NOT EXISTS idx_user_achievements_user_id ON user_achievements(user_id);

ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_user_achievements" ON user_achievements;
CREATE POLICY "anon_select_user_achievements" ON user_achievements FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_user_achievements" ON user_achievements;
CREATE POLICY "anon_insert_user_achievements" ON user_achievements FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_user_achievements" ON user_achievements;
CREATE POLICY "anon_update_user_achievements" ON user_achievements FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_user_achievements" ON user_achievements;
CREATE POLICY "anon_delete_user_achievements" ON user_achievements FOR DELETE
  TO anon, authenticated USING (true);

-- ============================================================
-- Seed achievements
-- ============================================================
INSERT INTO achievements (id, title, description, icon, xp_reward, category) VALUES
  ('first_petition', 'Primeira Petição', 'Concluiu o primeiro exercício de redação', 'FileText', 50, 'milestone'),
  ('ten_petitions', '10 Petições', 'Completou 10 exercícios de redação', 'Files', 150, 'volume'),
  ('fifty_petitions', '50 Petições', 'Completou 50 exercícios de redação', 'Library', 500, 'volume'),
  ('perfect_score', 'Nota Máxima', 'Obteve pontuação 100 em um exercício', 'Star', 200, 'quality'),
  ('high_score_streak', 'Consistência', 'Obteve acima de 80 em 5 exercícios consecutivos', 'TrendingUp', 300, 'quality'),
  ('streak_3', '3 Dias Seguidos', 'Praticou por 3 dias consecutivos', 'Flame', 100, 'streak'),
  ('streak_7', 'Semana Completa', 'Praticou por 7 dias consecutivos', 'Flame', 250, 'streak'),
  ('streak_30', 'Mês Dedicado', 'Praticou por 30 dias consecutivos', 'Flame', 1000, 'streak'),
  ('all_areas', 'Multidisciplinar', 'Completou exercícios em todas as áreas do Direito', 'BookOpen', 300, 'milestone'),
  ('hard_case', 'Caso Difícil', 'Completou um caso de dificuldade Difícil', 'Target', 150, 'milestone'),
  ('wordsmith', 'Redator', 'Escreveu uma petição com mais de 800 palavras', 'PenLine', 100, 'quality'),
  ('quick_learner', 'Aprendizado Rápido', 'Melhorou a pontuação em relação ao exercício anterior', 'TrendingUp', 75, 'quality')
ON CONFLICT (id) DO NOTHING;
