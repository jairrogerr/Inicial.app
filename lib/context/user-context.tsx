"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { supabase } from "@/lib/supabase/client";
import {
  UserProfile,
  ExerciseHistory,
  Achievement,
  UserAchievement,
  getLevelForXp,
  getXpForExercise,
} from "@/lib/types";

const USER_ID_KEY = "lex_user_id";
const USER_NAME_KEY = "lex_user_name";

function getOrCreateUserId(): string {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem(USER_ID_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(USER_ID_KEY, id);
  }
  return id;
}

interface UserContextType {
  profile: UserProfile | null;
  history: ExerciseHistory[];
  achievements: Achievement[];
  userAchievements: UserAchievement[];
  loading: boolean;
  refreshProfile: () => Promise<void>;
  saveExercise: (params: {
    caseId: number;
    caseTitle: string;
    caseArea: string;
    caseDifficulty: "Fácil" | "Médio" | "Difícil";
    score: number;
    wordCount: number;
    checkedItems: number;
    petitionText: string;
  }) => Promise<{ xpEarned: number; newAchievements: Achievement[] }>;
  updateName: (name: string) => Promise<void>;
}

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [history, setHistory] = useState<ExerciseHistory[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [userAchievements, setUserAchievements] = useState<UserAchievement[]>([]);
  const [loading, setLoading] = useState(true);
  const userIdRef = useRef<string>("");

  const ensureProfile = useCallback(async (userId: string): Promise<UserProfile> => {
    const { data: existing } = await supabase
      .from("user_profiles")
      .select("*")
      .eq("id", userId)
      .maybeSingle();

    if (existing) return existing as UserProfile;

    const storedName = localStorage.getItem(USER_NAME_KEY) || "Estudante";
    const { data: created, error } = await supabase
      .from("user_profiles")
      .insert({ id: userId, name: storedName })
      .select()
      .single();

    if (error) throw error;
    return created as UserProfile;
  }, []);

  const loadData = useCallback(async () => {
    const userId = getOrCreateUserId();
    if (!userId) return;
    userIdRef.current = userId;

    try {
      const [profileResult, historyResult, achievementsResult, userAchievementsResult] =
        await Promise.all([
          ensureProfile(userId),
          supabase
            .from("exercise_history")
            .select("*")
            .eq("user_id", userId)
            .order("completed_at", { ascending: false })
            .limit(50),
          supabase.from("achievements").select("*"),
          supabase
            .from("user_achievements")
            .select("*, achievement:achievements(*)")
            .eq("user_id", userId),
        ]);

      setProfile(profileResult);
      setHistory((historyResult.data ?? []) as ExerciseHistory[]);
      setAchievements((achievementsResult.data ?? []) as Achievement[]);
      setUserAchievements((userAchievementsResult.data ?? []) as UserAchievement[]);
    } catch (err) {
      console.error("Failed to load user data", err);
    } finally {
      setLoading(false);
    }
  }, [ensureProfile]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const refreshProfile = useCallback(async () => {
    await loadData();
  }, [loadData]);

  const updateName = useCallback(async (name: string) => {
    const userId = userIdRef.current;
    if (!userId) return;
    localStorage.setItem(USER_NAME_KEY, name);
    await supabase.from("user_profiles").update({ name }).eq("id", userId);
    setProfile((prev) => (prev ? { ...prev, name } : prev));
  }, []);

  const saveExercise = useCallback(
    async (params: {
      caseId: number;
      caseTitle: string;
      caseArea: string;
      caseDifficulty: "Fácil" | "Médio" | "Difícil";
      score: number;
      wordCount: number;
      checkedItems: number;
      petitionText: string;
    }): Promise<{ xpEarned: number; newAchievements: Achievement[] }> => {
      const userId = userIdRef.current;
      if (!userId) return { xpEarned: 0, newAchievements: [] };

      const xpEarned = getXpForExercise(params.score, params.caseDifficulty);

      await supabase.from("exercise_history").insert({
        user_id: userId,
        case_id: params.caseId,
        case_title: params.caseTitle,
        case_area: params.caseArea,
        case_difficulty: params.caseDifficulty,
        score: params.score,
        word_count: params.wordCount,
        checked_items: params.checkedItems,
        xp_earned: xpEarned,
        petition_text: params.petitionText,
      });

      const { data: updatedHistory } = await supabase
        .from("exercise_history")
        .select("*")
        .eq("user_id", userId)
        .order("completed_at", { ascending: false })
        .limit(50);

      const allHistory = (updatedHistory ?? []) as ExerciseHistory[];
      setHistory(allHistory);

      const { data: currentProfileData } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("id", userId)
        .single();

      const currentProfile = currentProfileData as UserProfile;
      const newXp = currentProfile.xp + xpEarned;
      const newLevel = getLevelForXp(newXp).level;

      const today = new Date().toISOString().split("T")[0];
      const lastDate = currentProfile.last_activity_date;
      const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
      const newStreak =
        lastDate === today
          ? currentProfile.streak_days
          : lastDate === yesterday
          ? currentProfile.streak_days + 1
          : 1;

      await supabase
        .from("user_profiles")
        .update({
          xp: newXp,
          level: newLevel,
          streak_days: newStreak,
          last_activity_date: today,
        })
        .eq("id", userId);

      const { data: achievementsAll } = await supabase.from("achievements").select("*");
      const { data: userAchievementsData } = await supabase
        .from("user_achievements")
        .select("*")
        .eq("user_id", userId);

      const earned = new Set((userAchievementsData ?? []).map((a: { achievement_id: string }) => a.achievement_id));
      const allAchievements = (achievementsAll ?? []) as Achievement[];
      const newUnlocked: Achievement[] = [];

      const totalExercises = allHistory.length;
      const areasCompleted = new Set(allHistory.map((h) => h.case_area));
      const recentScores = allHistory.slice(0, 5).map((h) => h.score);
      const allHighScores = recentScores.length === 5 && recentScores.every((s) => s >= 80);

      const checkAchievement = async (id: string) => {
        if (earned.has(id)) return;
        const achievement = allAchievements.find((a) => a.id === id);
        if (!achievement) return;
        await supabase
          .from("user_achievements")
          .insert({ user_id: userId, achievement_id: id })
          .select()
          .maybeSingle();
        newUnlocked.push(achievement);
        earned.add(id);
      };

      if (totalExercises >= 1) await checkAchievement("first_petition");
      if (totalExercises >= 10) await checkAchievement("ten_petitions");
      if (totalExercises >= 50) await checkAchievement("fifty_petitions");
      if (params.score === 100) await checkAchievement("perfect_score");
      if (allHighScores) await checkAchievement("high_score_streak");
      if (newStreak >= 3) await checkAchievement("streak_3");
      if (newStreak >= 7) await checkAchievement("streak_7");
      if (newStreak >= 30) await checkAchievement("streak_30");
      if (areasCompleted.size >= 4) await checkAchievement("all_areas");
      if (params.caseDifficulty === "Difícil") await checkAchievement("hard_case");
      if (params.wordCount >= 800) await checkAchievement("wordsmith");
      if (
        allHistory.length >= 2 &&
        allHistory[0].score > allHistory[1].score
      ) {
        await checkAchievement("quick_learner");
      }

      const { data: freshProfile } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("id", userId)
        .single();

      const { data: freshUserAchievements } = await supabase
        .from("user_achievements")
        .select("*, achievement:achievements(*)")
        .eq("user_id", userId);

      setProfile(freshProfile as UserProfile);
      setUserAchievements((freshUserAchievements ?? []) as UserAchievement[]);
      setAchievements(allAchievements);

      return { xpEarned, newAchievements: newUnlocked };
    },
    []
  );

  return (
    <UserContext.Provider
      value={{
        profile,
        history,
        achievements,
        userAchievements,
        loading,
        refreshProfile,
        saveExercise,
        updateName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within UserProvider");
  return ctx;
}
