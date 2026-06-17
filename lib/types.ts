export interface UserProfile {
  id: string;
  name: string;
  xp: number;
  level: number;
  streak_days: number;
  last_activity_date: string | null;
  created_at: string;
}

export interface ExerciseHistory {
  id: string;
  user_id: string;
  case_id: number;
  case_title: string;
  case_area: string;
  case_difficulty: "Fácil" | "Médio" | "Difícil";
  score: number;
  word_count: number;
  checked_items: number;
  xp_earned: number;
  petition_text: string | null;
  completed_at: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  xp_reward: number;
  category: "milestone" | "streak" | "quality" | "volume";
}

export interface UserAchievement {
  id: string;
  user_id: string;
  achievement_id: string;
  earned_at: string;
  achievement?: Achievement;
}

export interface LevelDefinition {
  level: number;
  title: string;
  minXp: number;
  maxXp: number;
}

export const LEVELS: LevelDefinition[] = [
  { level: 1, title: "Calouro", minXp: 0, maxXp: 200 },
  { level: 2, title: "Estudante", minXp: 200, maxXp: 500 },
  { level: 3, title: "Pesquisador", minXp: 500, maxXp: 1000 },
  { level: 4, title: "Estagiário", minXp: 1000, maxXp: 2000 },
  { level: 5, title: "Advogado Júnior", minXp: 2000, maxXp: 3500 },
  { level: 6, title: "Advogado Pleno", minXp: 3500, maxXp: 5500 },
  { level: 7, title: "Advogado Sênior", minXp: 5500, maxXp: 8000 },
  { level: 8, title: "Especialista", minXp: 8000, maxXp: 11000 },
  { level: 9, title: "Consultor", minXp: 11000, maxXp: 15000 },
  { level: 10, title: "Doutor em Direito", minXp: 15000, maxXp: 99999 },
];

export function getLevelForXp(xp: number): LevelDefinition {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXp) return LEVELS[i];
  }
  return LEVELS[0];
}

export function getXpForExercise(
  score: number,
  difficulty: "Fácil" | "Médio" | "Difícil"
): number {
  const diffMultiplier = { Fácil: 1, Médio: 1.5, Difícil: 2.25 };
  const base = Math.round((score / 100) * 80);
  const bonus = score >= 80 ? 20 : score >= 50 ? 10 : 0;
  return Math.round((base + bonus) * diffMultiplier[difficulty]);
}
