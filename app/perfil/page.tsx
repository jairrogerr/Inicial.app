"use client";

import { useState } from "react";
import { useUser } from "@/lib/context/user-context";
import { getLevelForXp, LEVELS } from "@/lib/types";
import {
  Award,
  BookOpen,
  Flame,
  BarChart2,
  Clock,
  CheckCircle,
  Lock,
  TrendingUp,
  Edit2,
  Check,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const categoryLabels: Record<string, string> = {
  milestone: "Marco",
  streak: "Sequência",
  quality: "Qualidade",
  volume: "Volume",
};

const categoryColors: Record<string, string> = {
  milestone: "#1E3A5F",
  streak: "#ea580c",
  quality: "#16a34a",
  volume: "#7c3aed",
};

export default function Perfil() {
  const { profile, history, achievements, userAchievements, updateName, loading } =
    useUser();
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(profile?.name ?? "");
  const [activeTab, setActiveTab] = useState<"historico" | "conquistas">("historico");

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Carregando...</p>
      </div>
    );
  }

  const levelDef = profile ? getLevelForXp(profile.xp) : LEVELS[0];
  const nextLevel = LEVELS.find((l) => l.level === levelDef.level + 1) ?? levelDef;
  const progressPct =
    profile && nextLevel.minXp !== levelDef.minXp
      ? Math.min(
          100,
          Math.round(
            ((profile.xp - levelDef.minXp) / (nextLevel.minXp - levelDef.minXp)) * 100
          )
        )
      : 100;

  const earnedIds = new Set(userAchievements.map((ua) => ua.achievement_id));
  const avgScore =
    history.length > 0
      ? Math.round(history.reduce((s, h) => s + h.score, 0) / history.length)
      : 0;
  const bestScore = history.length > 0 ? Math.max(...history.map((h) => h.score)) : 0;
  const totalWords = history.reduce((s, h) => s + h.word_count, 0);

  const handleSaveName = async () => {
    if (nameInput.trim()) {
      await updateName(nameInput.trim());
    }
    setEditingName(false);
  };

  return (
    <main className="min-h-screen" style={{ background: "#F1F5FB" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Profile header */}
        <div
          className="rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden"
          style={{ background: "#1E3A5F" }}
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 32px,rgba(255,255,255,1) 32px,rgba(255,255,255,1) 33px),repeating-linear-gradient(90deg,transparent,transparent 32px,rgba(255,255,255,1) 32px,rgba(255,255,255,1) 33px)",
            }}
          />
          <div className="relative flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0"
              style={{ background: "#D4A74E", color: "#1E3A5F" }}
            >
              {(profile?.name ?? "E")[0].toUpperCase()}
            </div>
            <div className="flex-1">
              {editingName ? (
                <div className="flex items-center gap-2 mb-1">
                  <Input
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSaveName();
                      if (e.key === "Escape") setEditingName(false);
                    }}
                    className="h-8 text-sm bg-white/10 border-white/20 text-white placeholder:text-white/40 max-w-xs"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveName}
                    className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
                  >
                    <Check className="w-4 h-4 text-white" />
                  </button>
                  <button
                    onClick={() => setEditingName(false)}
                    className="p-1.5 rounded-md hover:bg-white/10 transition-colors"
                  >
                    <X className="w-4 h-4 text-white/60" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-xl font-bold">{profile?.name ?? "Estudante"}</h1>
                  <button
                    onClick={() => {
                      setNameInput(profile?.name ?? "");
                      setEditingName(true);
                    }}
                    className="p-1 rounded-md hover:bg-white/10 transition-colors"
                  >
                    <Edit2 className="w-3.5 h-3.5 text-white/50" />
                  </button>
                </div>
              )}
              <div
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium"
                style={{ background: "rgba(212,167,78,0.15)", color: "#D4A74E" }}
              >
                Nível {profile?.level ?? 1} · {levelDef.title}
              </div>
            </div>
            <div className="sm:text-right space-y-1 min-w-[180px]">
              <div className="text-2xl font-bold">{profile?.xp ?? 0} XP</div>
              <div className="text-xs text-white/50">
                {nextLevel.level !== levelDef.level
                  ? `${nextLevel.minXp - (profile?.xp ?? 0)} XP para o próximo nível`
                  : "Nível máximo atingido"}
              </div>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full xp-bar transition-all duration-700"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Exercícios", value: history.length, icon: BookOpen },
            { label: "Sequência", value: `${profile?.streak_days ?? 0}d`, icon: Flame },
            { label: "Média", value: history.length ? `${avgScore}%` : "—", icon: BarChart2 },
            { label: "Melhor nota", value: history.length ? `${bestScore}%` : "—", icon: TrendingUp },
          ].map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="bg-white rounded-xl border border-border p-4 text-center"
            >
              <Icon className="w-5 h-5 text-muted-foreground mx-auto mb-2" />
              <div className="text-xl font-bold">{value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Level path */}
        <div className="bg-white rounded-2xl border border-border p-6">
          <h2 className="font-semibold text-sm mb-4">Caminho de evolução</h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {LEVELS.map((lv) => {
              const isReached = (profile?.xp ?? 0) >= lv.minXp;
              const isCurrent = lv.level === levelDef.level;
              return (
                <div
                  key={lv.level}
                  className={`flex flex-col items-center gap-1 min-w-[60px] text-center`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all ${
                      isCurrent
                        ? "ring-2 ring-offset-2"
                        : ""
                    }`}
                    style={{
                      background: isReached ? "#1E3A5F" : "#F1F5F9",
                      color: isReached ? "#D4A74E" : "#94a3b8",
                      outline: isCurrent ? "2px solid #D4A74E" : undefined,
                      outlineOffset: isCurrent ? "2px" : undefined,
                    }}
                  >
                    {lv.level}
                  </div>
                  <div
                    className={`text-[10px] font-medium leading-tight ${
                      isReached ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {lv.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl border border-border overflow-hidden">
          <div className="flex border-b border-border">
            {(["historico", "conquistas"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "border-b-2 text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                style={
                  activeTab === tab
                    ? { borderBottomColor: "#1E3A5F", color: "#1E3A5F" }
                    : undefined
                }
              >
                {tab === "historico" ? (
                  <span className="flex items-center justify-center gap-1.5">
                    <Clock className="w-4 h-4" /> Histórico
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-1.5">
                    <Award className="w-4 h-4" /> Conquistas ({earnedIds.size}/
                    {achievements.length})
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === "historico" ? (
              history.length === 0 ? (
                <div className="py-12 text-center">
                  <BookOpen className="w-8 h-8 text-muted-foreground/40 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">
                    Nenhum exercício concluído ainda.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {history.map((item) => {
                    const scoreColor =
                      item.score >= 80
                        ? "text-emerald-700 bg-emerald-50"
                        : item.score >= 50
                        ? "text-amber-700 bg-amber-50"
                        : "text-rose-700 bg-rose-50";
                    return (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm">{item.case_title}</div>
                          <div className="text-xs text-muted-foreground">
                            {item.case_area} · {item.case_difficulty} ·{" "}
                            {new Date(item.completed_at).toLocaleDateString("pt-BR", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-xs text-muted-foreground">
                            {item.word_count}p
                          </span>
                          <span
                            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${scoreColor}`}
                          >
                            {item.score}%
                          </span>
                          <span
                            className="text-xs font-medium px-2 py-0.5 rounded-full"
                            style={{
                              background: "rgba(212,167,78,0.1)",
                              color: "#B8913A",
                            }}
                          >
                            +{item.xp_earned} XP
                          </span>
                        </div>
                      </div>
                    );
                  })}
                  <div className="pt-3 border-t border-border text-xs text-muted-foreground text-right">
                    Total: {totalWords.toLocaleString("pt-BR")} palavras escritas
                  </div>
                </div>
              )
            ) : (
              <div>
                {Object.entries(categoryLabels).map(([cat, label]) => {
                  const catAchs = achievements.filter((a) => a.category === cat);
                  if (catAchs.length === 0) return null;
                  return (
                    <div key={cat} className="mb-6 last:mb-0">
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ background: categoryColors[cat] }}
                        />
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {label}
                        </h3>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {catAchs.map((ach) => {
                          const earned = earnedIds.has(ach.id);
                          const ua = userAchievements.find(
                            (u) => u.achievement_id === ach.id
                          );
                          return (
                            <div
                              key={ach.id}
                              className={`flex items-start gap-3 p-4 rounded-xl border transition-all ${
                                earned
                                  ? "border-border bg-white"
                                  : "border-dashed border-border/60 bg-secondary/30 opacity-60"
                              }`}
                            >
                              <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                style={{
                                  background: earned
                                    ? categoryColors[cat] + "15"
                                    : "#F1F5F9",
                                  color: earned ? categoryColors[cat] : "#94a3b8",
                                }}
                              >
                                {earned ? (
                                  <CheckCircle className="w-5 h-5" />
                                ) : (
                                  <Lock className="w-4 h-4" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-sm">{ach.title}</div>
                                <div className="text-xs text-muted-foreground mt-0.5">
                                  {ach.description}
                                </div>
                                {earned && ua && (
                                  <div className="text-xs mt-1" style={{ color: "#D4A74E" }}>
                                    +{ach.xp_reward} XP ·{" "}
                                    {new Date(ua.earned_at).toLocaleDateString("pt-BR")}
                                  </div>
                                )}
                                {!earned && (
                                  <div className="text-xs mt-1 text-muted-foreground">
                                    +{ach.xp_reward} XP ao desbloquear
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
