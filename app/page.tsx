"use client";

import { useRouter } from "next/navigation";
import { useUser } from "@/lib/context/user-context";
import { getLevelForXp, LEVELS } from "@/lib/types";
import {
  ArrowRight,
  Flame,
  BookOpen,
  TrendingUp,
  Clock,
  Zap,
  Award,
  BarChart2,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cases } from "@/lib/data/cases";

function StatCard({
  label,
  value,
  sub,
  icon: Icon,
  highlight,
}: {
  label: string;
  value: string | number;
  sub?: string;
  icon: React.ElementType;
  highlight?: boolean;
}) {
  return (
    <div
      className="rounded-xl border bg-white p-5 flex flex-col gap-3"
      style={{ borderColor: highlight ? "#D4A74E" : undefined }}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {label}
        </span>
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: highlight ? "#FEF3E2" : "#F1F5F9" }}
        >
          <Icon
            className="w-4 h-4"
            style={{ color: highlight ? "#D4A74E" : "#1E3A5F" } as React.CSSProperties}
          />
        </div>
      </div>
      <div>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {sub && (
          <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>
        )}
      </div>
    </div>
  );
}

const difficultyColors: Record<string, string> = {
  Fácil: "text-emerald-700 bg-emerald-50",
  Médio: "text-amber-700 bg-amber-50",
  Difícil: "text-rose-700 bg-rose-50",
};

export default function Dashboard() {
  const router = useRouter();
  const { profile, history, userAchievements, achievements, loading } = useUser();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-3">
          <div
            className="w-10 h-10 rounded-xl mx-auto flex items-center justify-center font-bold text-lg"
            style={{ background: "#1E3A5F", color: "#D4A74E" }}
          >
            L
          </div>
          <p className="text-sm text-muted-foreground">Carregando...</p>
        </div>
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

  const avgScore =
    history.length > 0
      ? Math.round(history.reduce((s, h) => s + h.score, 0) / history.length)
      : 0;

  const recentHistory = history.slice(0, 5);
  const earnedIds = new Set(userAchievements.map((ua) => ua.achievement_id));
  const recentAchievements = userAchievements
    .slice(0, 3)
    .map((ua) => achievements.find((a) => a.id === ua.achievement_id))
    .filter(Boolean);

  const suggestedCase =
    history.length === 0
      ? cases[0]
      : cases.find((c) => !history.find((h) => h.case_id === c.id)) ?? cases[0];

  return (
    <main className="min-h-screen" style={{ background: "#F1F5FB" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Welcome + level card */}
        <div
          className="rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden"
          style={{ background: "#1E3A5F" }}
        >
          {/* subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 32px,rgba(255,255,255,1) 32px,rgba(255,255,255,1) 33px),repeating-linear-gradient(90deg,transparent,transparent 32px,rgba(255,255,255,1) 32px,rgba(255,255,255,1) 33px)",
            }}
          />
          <div className="relative flex flex-col sm:flex-row gap-6 sm:items-center justify-between">
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium mb-3"
                style={{ background: "rgba(212,167,78,0.15)", color: "#D4A74E" }}
              >
                <Zap className="w-3 h-3" />
                Nível {profile?.level ?? 1} — {levelDef.title}
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-1">
                Olá, {profile?.name ?? "Estudante"}
              </h1>
              <p className="text-white/60 text-sm">
                {history.length === 0
                  ? "Bem-vindo ao Inicial. Comece seu primeiro exercício."
                  : `${history.length} exercício${history.length > 1 ? "s" : ""} concluído${history.length > 1 ? "s" : ""}. Continue evoluindo.`}
              </p>
            </div>
            {/* XP progress */}
            <div className="sm:text-right min-w-[200px]">
              <div className="flex items-center justify-between text-xs text-white/60 mb-2">
                <span>{profile?.xp ?? 0} XP</span>
                <span>
                  {nextLevel.level !== levelDef.level
                    ? `${nextLevel.minXp} XP para nível ${nextLevel.level}`
                    : "Nível máximo"}
                </span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full xp-bar transition-all duration-700"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <div className="text-xs text-white/40 mt-1">{progressPct}% para o próximo nível</div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Sequência"
            value={`${profile?.streak_days ?? 0} dias`}
            sub="dias consecutivos"
            icon={Flame}
            highlight={Boolean(profile && profile.streak_days >= 3)}
          />
          <StatCard
            label="Exercícios"
            value={history.length}
            sub="concluídos"
            icon={BookOpen}
          />
          <StatCard
            label="Pontuação média"
            value={history.length > 0 ? `${avgScore}%` : "—"}
            sub="últimos exercícios"
            icon={BarChart2}
          />
          <StatCard
            label="Conquistas"
            value={earnedIds.size}
            sub={`de ${achievements.length} disponíveis`}
            icon={Award}
            highlight={recentAchievements.length > 0}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Suggested exercise */}
          <div className="lg:col-span-2 space-y-6">
            {/* Next suggested */}
            <div className="bg-white rounded-2xl border border-border p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-4 h-4" style={{ color: "#D4A74E" }} />
                <h2 className="font-semibold text-sm">Exercício sugerido</h2>
              </div>
              {suggestedCase && (
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          difficultyColors[suggestedCase.difficulty]
                        }`}
                      >
                        {suggestedCase.difficulty}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {suggestedCase.area}
                      </span>
                    </div>
                    <h3 className="font-semibold text-base mb-1">
                      {suggestedCase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {suggestedCase.description}
                    </p>
                  </div>
                  <Button
                    onClick={() => router.push("/treino")}
                    className="shrink-0 text-white font-medium"
                    style={{ background: "#1E3A5F" }}
                  >
                    Praticar
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </div>
              )}
            </div>

            {/* Recent history */}
            <div className="bg-white rounded-2xl border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <h2 className="font-semibold text-sm">Histórico recente</h2>
                </div>
                {history.length > 5 && (
                  <button
                    onClick={() => router.push("/perfil")}
                    className="text-xs font-medium hover:underline"
                    style={{ color: "#1E3A5F" }}
                  >
                    Ver todos
                  </button>
                )}
              </div>
              {recentHistory.length === 0 ? (
                <div className="py-10 text-center">
                  <BookOpen className="w-8 h-8 text-muted-foreground/40 mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">
                    Nenhum exercício concluído ainda.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    onClick={() => router.push("/treino")}
                  >
                    Começar agora
                  </Button>
                </div>
              ) : (
                <div className="space-y-2">
                  {recentHistory.map((item) => {
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
                          <div className="font-medium text-sm truncate">
                            {item.case_title}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {item.case_area} ·{" "}
                            {new Date(item.completed_at).toLocaleDateString("pt-BR")}
                          </div>
                        </div>
                        <div
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${scoreColor}`}
                        >
                          {item.score}%
                        </div>
                        <div className="text-xs text-muted-foreground shrink-0">
                          +{item.xp_earned} XP
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Performance chart by area */}
            <div className="bg-white rounded-2xl border border-border p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
                <h2 className="font-semibold text-sm">Desempenho por área</h2>
              </div>
              {history.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">
                  Sem dados ainda
                </p>
              ) : (
                <div className="space-y-3">
                  {Array.from(
                    history.reduce(
                      (acc, h) => {
                        const existing = acc.get(h.case_area) ?? { total: 0, count: 0 };
                        acc.set(h.case_area, {
                          total: existing.total + h.score,
                          count: existing.count + 1,
                        });
                        return acc;
                      },
                      new Map<string, { total: number; count: number }>()
                    )
                  ).map(([area, { total, count }]) => {
                    const avg = Math.round(total / count);
                    return (
                      <div key={area}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-muted-foreground">{area}</span>
                          <span className="font-medium">{avg}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${avg}%`,
                              background: avg >= 80 ? "#1E3A5F" : avg >= 50 ? "#D4A74E" : "#ef4444",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Recent achievements */}
            <div className="bg-white rounded-2xl border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-muted-foreground" />
                  <h2 className="font-semibold text-sm">Conquistas recentes</h2>
                </div>
                <button
                  onClick={() => router.push("/perfil")}
                  className="text-xs font-medium hover:underline"
                  style={{ color: "#1E3A5F" }}
                >
                  Ver todas
                </button>
              </div>
              {recentAchievements.length === 0 ? (
                <div className="py-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Complete exercícios para desbloquear conquistas.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {recentAchievements.map((ach) =>
                    ach ? (
                      <div key={ach.id} className="flex items-start gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm"
                          style={{ background: "#FEF3E2", color: "#D4A74E" }}
                        >
                          ✦
                        </div>
                        <div>
                          <div className="text-sm font-medium">{ach.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {ach.description}
                          </div>
                        </div>
                      </div>
                    ) : null
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
