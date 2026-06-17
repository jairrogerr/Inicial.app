"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, BookOpen, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cases } from "@/lib/data/cases";
import { useTraining } from "@/lib/context/training-context";
import { useUser } from "@/lib/context/user-context";

const difficultyConfig: Record<string, { label: string; color: string; bg: string }> = {
  Fácil: { label: "Fácil", color: "#16a34a", bg: "#f0fdf4" },
  Médio: { label: "Médio", color: "#d97706", bg: "#fffbeb" },
  Difícil: { label: "Difícil", color: "#dc2626", bg: "#fef2f2" },
};

const xpRewards: Record<string, string> = {
  Fácil: "até 80 XP",
  Médio: "até 120 XP",
  Difícil: "até 180 XP",
};

export default function Treino() {
  const router = useRouter();
  const { setCase } = useTraining();
  const { history } = useUser();

  const handleSelect = (c: (typeof cases)[0]) => {
    setCase(c);
    router.push("/treino/simular");
  };

  const completedIds = new Set(history.map((h) => h.case_id));

  return (
    <main className="min-h-screen" style={{ background: "#F1F5FB" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-7">
          <h1 className="text-2xl font-bold tracking-tight mb-1">Escolher exercício</h1>
          <p className="text-muted-foreground text-sm">
            Selecione um caso para praticar redação de petição inicial.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c) => {
            const diff = difficultyConfig[c.difficulty];
            const done = completedIds.has(c.id);
            return (
              <div
                key={c.id}
                className="group bg-white rounded-2xl border border-border p-5 hover:shadow-md hover:border-slate-300 transition-all cursor-pointer flex flex-col"
                onClick={() => handleSelect(c)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "#EEF2F7" }}
                  >
                    <BookOpen className="w-5 h-5" style={{ color: "#1E3A5F" }} />
                  </div>
                  <div className="flex items-center gap-2">
                    {done && (
                      <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        Feito
                      </span>
                    )}
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ color: diff.color, background: diff.bg }}
                    >
                      {diff.label}
                    </span>
                  </div>
                </div>

                <h3 className="font-semibold text-sm mb-1 group-hover:text-navy transition-colors">
                  {c.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2 flex-1">
                  {c.description}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-3 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {c.area}
                  </div>
                  <div
                    className="font-medium"
                    style={{ color: "#D4A74E" }}
                  >
                    {xpRewards[c.difficulty]}
                  </div>
                </div>

                <Button
                  className="w-full mt-3 text-white text-sm"
                  size="sm"
                  style={{ background: "#1E3A5F" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelect(c);
                  }}
                >
                  {done ? "Repetir" : "Iniciar"}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
