"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  RotateCcw,
  Star,
  Zap,
  Award,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTraining } from "@/lib/context/training-context";
import { useUser } from "@/lib/context/user-context";
import type { Achievement } from "@/lib/types";

export default function Avaliacao() {
  const router = useRouter();
  const { state, reset } = useTraining();
  const { saveExercise } = useUser();
  const { evaluation, currentCase, petitionText, checklist } = state;
  const [saved, setSaved] = useState(false);
  const [xpEarned, setXpEarned] = useState(0);
  const [newAchievements, setNewAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    if (!evaluation || !currentCase) {
      router.push("/treino");
      return;
    }
    if (saved) return;
    setSaved(true);
    saveExercise({
      caseId: currentCase.id,
      caseTitle: currentCase.title,
      caseArea: currentCase.area,
      caseDifficulty: currentCase.difficulty,
      score: evaluation.score,
      wordCount: evaluation.wordCount,
      checkedItems: checklist.filter((i) => i.checked).length,
      petitionText,
    }).then(({ xpEarned: xp, newAchievements: ach }) => {
      setXpEarned(xp);
      setNewAchievements(ach);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!evaluation || !currentCase) return null;

  const scoreColor =
    evaluation.score >= 80
      ? "text-emerald-600"
      : evaluation.score >= 50
      ? "text-amber-600"
      : "text-rose-600";

  const scoreBg =
    evaluation.score >= 80
      ? "bg-emerald-50 border-emerald-100"
      : evaluation.score >= 50
      ? "bg-amber-50 border-amber-100"
      : "bg-rose-50 border-rose-100";

  const scoreLabel =
    evaluation.score >= 80
      ? "Excelente trabalho"
      : evaluation.score >= 50
      ? "Bom progresso"
      : "Continue praticando";

  return (
    <main className="min-h-screen" style={{ background: "#F1F5FB" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-5 animate-fade-in-up">
        {/* Score card */}
        <div
          className="rounded-2xl border p-7 text-center"
          style={{ background: "#1E3A5F", borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="text-white/60 text-sm mb-2">{currentCase.title}</div>
          <div
            className={`inline-flex flex-col items-center justify-center w-24 h-24 rounded-full border-2 mb-4 ${scoreBg}`}
          >
            <span className={`text-4xl font-bold ${scoreColor}`}>
              {evaluation.score}
            </span>
            <span className="text-xs text-muted-foreground">/ 100</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">{scoreLabel}!</h1>
          <p className="text-white/60 text-sm max-w-md mx-auto">
            {evaluation.score >= 80
              ? "Sua petição demonstra estrutura bem organizada e domínio dos elementos essenciais."
              : evaluation.score >= 50
              ? "Estrutura razoável, mas ainda há elementos que podem ser aprimorados."
              : "Revise os pontos abaixo e tente novamente para solidificar seu aprendizado."}
          </p>

          {/* XP earned */}
          {xpEarned > 0 && (
            <div
              className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold"
              style={{ background: "rgba(212,167,78,0.15)", color: "#D4A74E" }}
            >
              <Zap className="w-4 h-4" />
              +{xpEarned} XP ganho
            </div>
          )}
        </div>

        {/* New achievements */}
        {newAchievements.length > 0 && (
          <div className="bg-white rounded-2xl border border-border p-5">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-4 h-4" style={{ color: "#D4A74E" }} />
              <h3 className="font-semibold text-sm">
                {newAchievements.length === 1
                  ? "Nova conquista desbloqueada!"
                  : `${newAchievements.length} conquistas desbloqueadas!`}
              </h3>
            </div>
            <div className="space-y-2">
              {newAchievements.map((ach) => (
                <div
                  key={ach.id}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ background: "rgba(212,167,78,0.06)" }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                    style={{ background: "#FEF3E2", color: "#D4A74E" }}
                  >
                    ✦
                  </div>
                  <div>
                    <div className="font-medium text-sm">{ach.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {ach.description} · +{ach.xp_reward} XP
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Palavras", value: evaluation.wordCount },
            {
              label: "Seções",
              value: evaluation.hasSections ? "Sim" : "Não",
            },
            {
              label: "Checklist",
              value: `${checklist.filter((i) => i.checked).length}/6`,
            },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="bg-white rounded-xl border border-border p-4 text-center"
            >
              <div className="text-xl font-bold">{value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Feedback */}
        {evaluation.positives.length > 0 && (
          <div className="bg-white rounded-2xl border border-border p-5">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              Pontos positivos
            </h3>
            <ul className="space-y-2">
              {evaluation.positives.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        )}

        {evaluation.improvements.length > 0 && (
          <div className="bg-white rounded-2xl border border-border p-5">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <XCircle className="w-4 h-4 text-rose-500" />
              Pontos para melhorar
            </h3>
            <ul className="space-y-2">
              {evaluation.improvements.map((imp, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                  {imp}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={() => router.push("/treino/simular")}
            className="flex-1"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Revisar petição
          </Button>
          <Button
            onClick={() => {
              reset();
              router.push("/treino");
            }}
            className="flex-1 text-white"
            style={{ background: "#1E3A5F" }}
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Novo exercício
          </Button>
          <Button
            variant="outline"
            onClick={() => router.push("/treino/referencia")}
            className="flex-1"
            style={{ borderColor: "#1E3A5F", color: "#1E3A5F" }}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Ver resposta de referência
          </Button>
        </div>
      </div>
    </main>
  );
}
