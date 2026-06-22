"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/lib/context/user-context";
import {
  TrendingUp,
  BookOpen,
  BarChart2,
  Target,
  ArrowLeft,
  Zap,
  Award,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";

const areaColors: Record<string, string> = {
  Consumidor: "#16a34a",
  Trabalhista: "#1E3A5F",
  Cível: "#d97706",
  Previdenciário: "#7c3aed",
};

export default function Evolucao() {
  const router = useRouter();
  const { history, loading } = useUser();
  const [activeChart, setActiveChart] = useState<"notas" | "semanal">("notas");

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: "#F1F5FB" }}>
        <p className="text-sm text-muted-foreground">Carregando evolução...</p>
      </main>
    );
  }

  const totalExercicios = history.length;
  const avgScore = totalExercicios > 0
    ? Math.round(history.reduce((s, h) => s + h.score, 0) / totalExercicios)
    : 0;
  const bestScore = totalExercicios > 0 ? Math.max(...history.map((h) => h.score)) : 0;
  const totalWords = history.reduce((s, h) => s + h.word_count, 0);

  const areaStats = useMemo(() => {
    const map = new Map<string, { total: number; count: number }>();
    history.forEach((h) => {
      const existing = map.get(h.case_area) ?? { total: 0, count: 0 };
      map.set(h.case_area, { total: existing.total + h.score, count: existing.count + 1 });
    });
    return Array.from(map.entries()).map(([area, { total, count }]) => ({
      area,
      avg: Math.round(total / count),
      count,
      color: areaColors[area] ?? "#64748b",
    }));
  }, [history]);

  const strongestArea = areaStats.length > 0
    ? areaStats.reduce((a, b) => (a.avg > b.avg ? a : b))
    : null;
  const weakestArea = areaStats.length > 0
    ? areaStats.reduce((a, b) => (a.avg < b.avg ? a : b))
    : null;

  const scoreData = useMemo(() => {
    return history.slice().reverse().map((h, i) => ({
      idx: i + 1,
      nota: h.score,
      area: h.case_area,
      titulo: h.case_title,
      data: new Date(h.completed_at).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }),
    }));
  }, [history]);

  const weeklyData = useMemo(() => {
    const map = new Map<string, { scores: number[]; count: number }>();
    history.forEach((h) => {
      const d = new Date(h.completed_at);
      const key = `${d.getFullYear()}-W${String(Math.ceil((d.getDate()) / 7)).padStart(2, "0")}`;
      const existing = map.get(key) ?? { scores: [], count: 0 };
      existing.scores.push(h.score);
      existing.count++;
      map.set(key, existing);
    });
    return Array.from(map.entries())
      .sort((a, b) => a[0].localeCompare(b[0]))
      .slice(-8)
      .map(([key, { scores, count }]) => ({
        semana: key,
        media: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
        exercicios: count,
      }));
  }, [history]);

  return (
    <main className="min-h-screen" style={{ background: "#F1F5FB" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Header */}
        <div className="rounded-2xl p-6 text-white relative overflow-hidden" style={{ background: "#1E3A5F" }}>
          <div className="relative flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5" style={{ color: "#D4A74E" }} />
            <h1 className="text-xl font-bold">Dashboard de Evolução</h1>
          </div>
          <p className="text-white/60 text-sm">
            Acompanhe seu progresso, identifique pontos fortes e áreas de melhoria.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Exercícios", value: totalExercicios, sub: "realizados", icon: BookOpen },
            { label: "Nota média", value: totalExercicios ? `${avgScore}%` : "—", sub: "geral", icon: BarChart2 },
            { label: "Melhor nota", value: totalExercicios ? `${bestScore}%` : "—", sub: "obtida", icon: Target },
            { label: "Palavras escritas", value: totalWords.toLocaleString("pt-BR"), sub: "total", icon: Zap },
          ].map(({ label, value, sub, icon: Icon }) => (
            <div key={label} className="bg-white rounded-xl border border-border p-5 text-center">
              <Icon className="w-5 h-5 text-muted-foreground mx-auto mb-2" />
              <div className="text-2xl font-bold">{value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{label} · {sub}</div>
            </div>
          ))}
        </div>

        {/* Charts */}
        {totalExercicios > 0 && (
          <div className="bg-white rounded-2xl border border-border p-6">
            <div className="flex items-center gap-2 mb-5">
              <BarChart2 className="w-4 h-4 text-muted-foreground" />
              <h2 className="font-semibold text-sm">Evolução Temporal</h2>
            </div>
            <div className="flex gap-2 mb-4">
              {(["notas", "semanal"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveChart(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeChart === t
                      ? "text-white"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                  style={activeChart === t ? { background: "#1E3A5F" } : undefined}
                >
                  {t === "notas" ? "Notas por Exercício" : "Média Semanal"}
                </button>
              ))}
            </div>
            <div className="h-72">
              <ChartContainer config={{}}>
                {activeChart === "notas" ? (
                  <LineChart data={scoreData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="data" tick={{ fontSize: 11 }} stroke="#94a3b8" />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} stroke="#94a3b8" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="nota"
                      stroke="#1E3A5F"
                      strokeWidth={2}
                      dot={{ r: 4, fill: "#1E3A5F" }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                ) : (
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="semana" tick={{ fontSize: 11 }} stroke="#94a3b8" />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} stroke="#94a3b8" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="media" radius={[4, 4, 0, 0]}>
                      {weeklyData.map((_, i) => (
                        <Cell key={i} fill={i % 2 === 0 ? "#1E3A5F" : "#D4A74E"} />
                      ))}
                    </Bar>
                  </BarChart>
                )}
              </ChartContainer>
            </div>
          </div>
        )}

        {/* Performance by Area */}
        <div className="bg-white rounded-2xl border border-border p-6">
          <div className="flex items-center gap-2 mb-5">
            <Award className="w-4 h-4 text-muted-foreground" />
            <h2 className="font-semibold text-sm">Desempenho por Área</h2>
          </div>
          {areaStats.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8">
              Complete exercícios para ver seu desempenho por área jurídica.
            </p>
          ) : (
            <div className="space-y-4">
              {areaStats.map((stat) => (
                <div key={stat.area}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-muted-foreground">{stat.area}</span>
                    <span className="font-medium">
                      {stat.avg}% · {stat.count} exercício{stat.count > 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${stat.avg}%`, background: stat.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Indicators */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div
            className="rounded-xl border p-5 flex items-start gap-4"
            style={{ borderColor: "#e2e8f0", background: "#fff" }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#F0FDF4" }}>
              <TrendingUp className="w-5 h-5" style={{ color: "#16a34a" }} />
            </div>
            <div>
              <div className="text-sm font-semibold">Área mais forte</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {strongestArea
                  ? `${strongestArea.area} · média de ${strongestArea.avg}%`
                  : "Complete exercícios para identificar"}
              </div>
            </div>
          </div>
          <div
            className="rounded-xl border p-5 flex items-start gap-4"
            style={{ borderColor: "#e2e8f0", background: "#fff" }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#FEF2F2" }}>
              <Target className="w-5 h-5" style={{ color: "#dc2626" }} />
            </div>
            <div>
              <div className="text-sm font-semibold">Área que precisa de prática</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {weakestArea
                  ? `${weakestArea.area} · média de ${weakestArea.avg}%`
                  : "Complete exercícios para identificar"}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={() => router.push("/")}
            className="flex-1"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Dashboard
          </Button>
          <Button
            onClick={() => router.push("/treino")}
            className="flex-1 text-white"
            style={{ background: "#1E3A5F" }}
          >
            Praticar Novamente
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
}
