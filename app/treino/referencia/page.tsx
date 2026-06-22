"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft, BookOpen, User, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTraining } from "@/lib/context/training-context";
import { useUser } from "@/lib/context/user-context";

const sectionLabels = [
  { key: "endereçamento", label: "Endereçamento", regex: /EXMO\.|DOUTOR|JUIZ|VARA|COMARCA/i },
  { key: "qualificacao", label: "Qualificação das Partes", regex: /AUTOR:|RÉU:|CPF|CNPJ|residente/i },
  { key: "fatos", label: "Fatos", regex: /DOS FATOS|DOS FATOS|FATOS/i },
  { key: "fundamentacao", label: "Fundamentação Jurídica", regex: /DO DIREITO|DA FUNDAMENTA|FUNDAMENTAÇÃO/i },
  { key: "pedidos", label: "Pedidos", regex: /DOS PEDIDOS|REQUER|REQUER-SE/i },
  { key: "valor", label: "Valor da Causa", regex: /DO VALOR|VALOR DA CAUSA/i },
];

function highlightSections(text: string) {
  const lines = text.split("\n");
  return lines.map((line, idx) => {
    const match = sectionLabels.find((s) => s.regex.test(line.trim()) && line.trim().length > 0);
    if (match) {
      return (
        <div key={idx} className="mt-4 mb-1">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-semibold tracking-wide uppercase bg-[#1E3A5F] text-[#D4A74E]">
            <CheckCircle className="w-3 h-3" />
            {match.label}
          </span>
        </div>
      );
    }
    return (
      <p key={idx} className="text-sm leading-relaxed text-foreground">
        {line || "\u00A0"}
      </p>
    );
  });
}

export default function Referencia() {
  const router = useRouter();
  const { state, reset } = useTraining();
  const { saveExercise } = useUser();
  const [tab, setTab] = useState<"minha" | "referencia">("referencia");
  const [saved, setSaved] = useState(false);

  const { currentCase, petitionText, evaluation } = state;

  useEffect(() => {
    if (!currentCase || !evaluation) {
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
      checkedItems: state.checklist.filter((i) => i.checked).length,
      petitionText,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!currentCase || !evaluation) return null;

  return (
    <main className="min-h-screen" style={{ background: "#F1F5FB" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Header */}
        <div
          className="rounded-2xl p-6 text-white relative overflow-hidden"
          style={{ background: "#1E3A5F" }}
        >
          <div className="relative flex items-center gap-3 mb-2">
            <BookOpen className="w-5 h-5" style={{ color: "#D4A74E" }} />
            <h1 className="text-xl font-bold">Resposta de Referência</h1>
          </div>
          <p className="text-white/60 text-sm">
            Compare sua petição com a resposta modelo para identificar pontos de melhoria.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium" style={{ background: "rgba(212,167,78,0.15)", color: "#D4A74E" }}>
            {currentCase.title} · {currentCase.area} · {currentCase.difficulty}
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-border overflow-hidden">
          <div className="flex border-b border-border">
            <button
              onClick={() => setTab("minha")}
              className={`flex-1 py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
                tab === "minha"
                  ? "border-b-2 text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={tab === "minha" ? { borderBottomColor: "#1E3A5F", color: "#1E3A5F" } : undefined}
            >
              <User className="w-4 h-4" />
              Minha Petição
            </button>
            <button
              onClick={() => setTab("referencia")}
              className={`flex-1 py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
                tab === "referencia"
                  ? "border-b-2 text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={tab === "referencia" ? { borderBottomColor: "#1E3A5F", color: "#1E3A5F" } : undefined}
            >
              <FileText className="w-4 h-4" />
              Resposta de Referência
            </button>
          </div>

          <div className="p-6">
            <div
              className="rounded-xl border p-6 bg-white"
              style={{ borderColor: "#e2e8f0", fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: "14px", lineHeight: "1.75" }}
            >
              {tab === "minha" ? (
                <div>
                  {petitionText ? (
                    highlightSections(petitionText)
                  ) : (
                    <p className="text-muted-foreground text-sm">Você não enviou nenhuma petição.</p>
                  )}
                </div>
              ) : (
                <div>
                  {highlightSections(currentCase.modelAnswer)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={() => router.push("/treino/avaliacao")}
            className="flex-1"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar à Avaliação
          </Button>
          <Button
            onClick={() => {
              reset();
              router.push("/treino");
            }}
            className="flex-1 text-white"
            style={{ background: "#1E3A5F" }}
          >
            Novo Exercício
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              reset();
              router.push("/evolucao");
            }}
            className="flex-1"
          >
            Ver Evolução
          </Button>
        </div>
      </div>
    </main>
  );
}
